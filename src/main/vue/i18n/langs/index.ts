import ptBR from '@/i18n/langs/pt_br.json'
import en from '@/i18n/langs/en.json'

export const LOCALE_KEYS = {
  PT_BR: 'pt_br',
  EN: 'en',
} as const

export default {
  [LOCALE_KEYS.PT_BR]: ptBR,
  [LOCALE_KEYS.EN]: en,
} as const
