import { computed, type ComputedRef } from 'vue'
import md5 from 'blueimp-md5'

import type { Contact } from '@/types/PersonalInfo'
import { BASE_GRAVATAR, BASE_WHATSAPP } from '@/constants/baseLinks'

interface ContactLinks {
  gravatar: ComputedRef<string>
  email: ComputedRef<string>
  whatsapp: ComputedRef<string>
}

export function useLinks(info: Contact): ContactLinks {
  const gravatar = computed(
    () => `${BASE_GRAVATAR}/avatar/${md5(info.email.trim().toLowerCase())}?s=160&d=retro`,
  )

  const email = computed(() => `mailto:${info.email.trim().toLowerCase()}`)

  const whatsapp = computed(() => {
    const phone = info.phone.replace(/\D/g, '')
    const message = info.whatsappMessage ? `&text=${info.whatsappMessage}` : ''
    return `${BASE_WHATSAPP}/send/?phone=${phone}${message}`
  })

  return {
    gravatar,
    email,
    whatsapp,
  }
}
