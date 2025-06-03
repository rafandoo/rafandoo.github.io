import md5 from 'blueimp-md5'
import type { PersonalInfo } from '@/types/PersonalInfo'

import {
  BASE_GRAVATAR,
  BASE_WHATSAPP,
} from '@/constants/baseLinks.ts'

/**
 * Generates social media and contact links based on personal information.
 *
 * @param {PersonalInfo} info - Personal information used to construct links
 * @returns {Object} An object containing various social and contact links
 * @property {string} gravatar - Gravatar profile image URL
 * @property {string} [whatsLink] - WhatsApp contact link (undefined if no phone)
 */
export function useLinks(info: PersonalInfo) {
  const gravatar = `${BASE_GRAVATAR}/avatar/${md5(info.email.trim().toLowerCase())}?s=200&d=retro`

  const whatsLink = (() => {
    const phone = info.phone.replace(/\D/g, '')
    if (!phone) return undefined

    const base = `${BASE_WHATSAPP}/send/?phone=${phone}`
    const message = info.whatsappMessage ? `&text=${encodeURIComponent(info.whatsappMessage)}` : ''

    return base + message
  })()

  return {
    gravatar,
    whatsLink
  }
}
