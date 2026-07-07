import { tryOnScopeDispose } from '@vueuse/core'
import { useMediaQuery, useEventListener } from '@vueuse/core'
import { computed, nextTick, ref } from 'vue'

export function useCvPrint() {
  const manualPreview = ref(false)
  const isPrintMedia = useMediaQuery('print')

  const isCvMode = computed(() => isPrintMedia.value || manualPreview.value)

  function openCvPreview() {
    manualPreview.value = true
  }

  function closeCvPreview() {
    manualPreview.value = false
  }

  async function printCv() {
    manualPreview.value = true
    await nextTick()
    window.print()
  }

  const stop = useEventListener(window, 'afterprint', closeCvPreview)
  tryOnScopeDispose(stop)

  return { isCvMode, openCvPreview, closeCvPreview, printCv }
}
