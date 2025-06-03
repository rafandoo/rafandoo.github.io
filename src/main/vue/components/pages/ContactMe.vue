<script setup lang="ts">
import { $t } from '@/i18n'
import { onMounted } from 'vue'
import { toast, type ToastOptions } from 'vue3-toastify'
import { PAGE_CONTACT } from '@/constants/pages.ts'
import { SendHorizontal } from 'lucide-vue-next'

const props = defineProps<{
  pageClip: string
}>()

const notify = (message: string, type: string) => {
  toast(message, {
    autoClose: 1000,
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    closeOnClick: true,
    type: type,
    theme: 'dark'
  } as ToastOptions)
}

const ctrlForm = () => {
  const form = document.querySelector<HTMLFormElement>('[data-form]')
  const formInputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
    '[data-form-input]'
  )
  const formBtn = document.querySelector<HTMLButtonElement>('[data-form-btn]')

  if (!form || !formBtn) return

  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', () => {
      if (form.checkValidity()) {
        formBtn.removeAttribute('disabled')
      } else {
        formBtn.setAttribute('disabled', '')
      }
    })
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    try {
      const response = await fetch(props.pageClip, {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        notify($t('elements.message_sent'), 'success')
      } else {
        notify($t('elements.error_sending'), 'error')
      }
    } catch (error) {
      console.error(error)
      notify($t('elements.error_sending'), 'error')
    } finally {
      form.reset()
    }
  })
}

onMounted(ctrlForm)
</script>

<template>
  <article class="contact" :data-page="PAGE_CONTACT">
    <h2 class="article-title">{{ $t('main.contact') }}</h2>
    <section class="contact-form">
      <form data-form method="post">
        <div class="form-input-wrapper">
          <input
            type="text"
            name="name"
            class="form-input"
            :placeholder="$t('elements.name')"
            required
            data-form-input
          />
          <input
            type="email"
            name="email"
            class="form-input"
            placeholder="E-mail"
            required
            data-form-input
          />
        </div>
        <textarea
          name="message"
          class="form-input"
          :placeholder="$t('elements.message')"
          required
          data-form-input
        ></textarea>
        <div class="form-button-wrapper">
          <button class="form-button" disabled data-form-btn type="submit">
            <SendHorizontal :size="20" />
            <span>{{ $t('elements.send') }}</span>
          </button>
        </div>
      </form>
    </section>
  </article>
</template>
