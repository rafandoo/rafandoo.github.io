import ptBR from './pt_br.json'
import en from './en.json'

/**
 * Defines the available locale keys for internationalization.
 * Provides a constant mapping of supported language locales.
 */
export const LOCALE_KEYS = {
  PT_BR: 'pt_br',
  EN: 'en',
} as const

export default {
  [LOCALE_KEYS.PT_BR]: ptBR,
  [LOCALE_KEYS.EN]: en,
} as const
