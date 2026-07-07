import { nextTick, ref } from 'vue'
import { useShare } from '@vueuse/core'

const isGeneratingPdf = ref(false)

function isIosDevice(): boolean {
  const ua = navigator.userAgent
  const iPad = /iPad/.test(ua)
  const iPhoneiPod = /iP(hone|od)/.test(ua)
  const iOSiPadOs =
    navigator.platform === 'MacIntel' &&
    (navigator as Navigator & { maxTouchPoints?: number }).maxTouchPoints! > 1
  return iPad || iPhoneiPod || iOSiPadOs
}

export function useCvExport(getFileName: () => string) {
  const { share, isSupported } = useShare()

  async function buildPdfBlob(): Promise<Blob> {
    const el = document.querySelector('.cv-a4') as HTMLElement | null
    if (!el) {
      throw new Error('cv-a4 não encontrado no DOM')
    }

    el.classList.add('export')
    await nextTick()
    await document.fonts.ready

    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import('html2canvas-pro'),
      import('jspdf'),
    ])

    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    })

    const elRect = el.getBoundingClientRect()
    const canvasScale = canvas.width / elRect.width
    const blockBoundaries = Array.from(
      el.querySelectorAll('.cv-section, .cv-company, .cv-item, .cv-summary, .cv-skill-cat'),
    )
      .map((b) => {
        const r = b.getBoundingClientRect()
        return (r.bottom - elRect.top) * canvasScale
      })
      .filter((y) => y > 0 && y <= canvas.height)
      .sort((a, b) => a - b)

    el.classList.remove('export')

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    const marginTop = 18
    const marginBottom = 16
    const marginLeft = 18
    const marginRight = 16

    const imgWidth = pageWidth - marginLeft - marginRight
    const usableHeight = pageHeight - marginTop - marginBottom

    const pxPerMm = canvas.width / imgWidth
    const sliceHeightPx = Math.floor(usableHeight * pxPerMm)

    const contentBottom =
      blockBoundaries.length > 0 ? blockBoundaries[blockBoundaries.length - 1] : canvas.height

    let renderedHeight = 0
    let pageIndex = 0

    while (renderedHeight < contentBottom) {
      const rawSlice = Math.min(sliceHeightPx, contentBottom - renderedHeight)
      const targetBottom = renderedHeight + rawSlice

      let sliceHeight = rawSlice
      let backwardBoundary = -1
      for (const b of blockBoundaries) {
        if (b <= renderedHeight) {
          continue
        }
        if (b <= targetBottom) {
          backwardBoundary = b
        }
      }
      if (backwardBoundary > renderedHeight) {
        sliceHeight = backwardBoundary - renderedHeight
      }

      const sliceCanvas = document.createElement('canvas')
      sliceCanvas.width = canvas.width
      sliceCanvas.height = sliceHeight
      const ctx = sliceCanvas.getContext('2d')
      if (!ctx) {
        throw new Error('não foi possível obter o contexto 2d do canvas')
      }
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, sliceCanvas.width, sliceHeight)
      ctx.drawImage(
        canvas,
        0,
        renderedHeight,
        canvas.width,
        sliceHeight,
        0,
        0,
        canvas.width,
        sliceHeight,
      )

      const sliceData = sliceCanvas.toDataURL('image/jpeg', 0.98)
      const sliceHeightMm = sliceHeight / pxPerMm

      if (pageIndex > 0) {
        pdf.addPage()
      }
      pdf.addImage(sliceData, 'JPEG', marginLeft, marginTop, imgWidth, sliceHeightMm)

      renderedHeight += sliceHeight
      pageIndex += 1
    }

    return pdf.output('blob')
  }

  async function downloadCv() {
    if (isGeneratingPdf.value) {
      return
    }

    isGeneratingPdf.value = true

    try {
      const blob = await buildPdfBlob()
      const fileName = `${getFileName()}-CV.pdf`
      const file = new File([blob], fileName, { type: 'application/pdf' })

      const canShareIos =
        isIosDevice() &&
        isSupported.value &&
        typeof navigator.canShare === 'function' &&
        navigator.canShare({ files: [file] })

      const url = URL.createObjectURL(blob)

      if (canShareIos) {
        await share({ files: [file], title: fileName })
      } else {
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.download = fileName
        document.body.appendChild(anchor)
        anchor.click()
        anchor.remove()
      }

      URL.revokeObjectURL(url)
    } finally {
      isGeneratingPdf.value = false
    }
  }

  return { isGeneratingPdf, downloadCv }
}
