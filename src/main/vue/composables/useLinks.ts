import { computed, type ComputedRef } from 'vue'

import type { Contact } from '@/types/PersonalInfo'
import { buildEmailHref, buildGravatarUrl, buildWhatsappHref } from '@/composables/links'

interface ContactLinks {
  gravatar: ComputedRef<string>
  email: ComputedRef<string>
  whatsapp: ComputedRef<string>
}

export function useLinks(info: Contact): ContactLinks {
  const gravatar = computed(() => buildGravatarUrl(info.email))
  const email = computed(() => buildEmailHref(info.email))
  const whatsapp = computed(() => buildWhatsappHref(info))

  return { gravatar, email, whatsapp }
}
