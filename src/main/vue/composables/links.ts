import md5 from 'blueimp-md5'

import type { Contact } from '@/types/PersonalInfo'
import { BASE_GRAVATAR, BASE_WHATSAPP } from '@/constants/baseLinks'

export function buildGravatarUrl(email: string): string {
  const hash = md5(email.trim().toLowerCase())
  return `${BASE_GRAVATAR}/avatar/${hash}?s=160&d=retro`
}

export function buildEmailHref(email: string): string {
  return `mailto:${email.trim().toLowerCase()}`
}

export function buildWhatsappHref(contact: Pick<Contact, 'phone' | 'whatsappMessage'>): string {
  const phone = contact.phone.replace(/\D/g, '')
  const message = contact.whatsappMessage ? `&text=${contact.whatsappMessage}` : ''
  return `${BASE_WHATSAPP}/send/?phone=${phone}${message}`
}
