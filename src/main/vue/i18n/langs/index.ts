import pt from '@/i18n/langs/pt.json'
import en from '@/i18n/langs/en.json'

export const LOCALE_KEYS = {
  PT: 'pt',
  EN: 'en',
} as const

export default {
  [LOCALE_KEYS.PT]: pt,
  [LOCALE_KEYS.EN]: en,
} as const
