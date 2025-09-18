import { type Composer, createI18n } from 'vue-i18n'
import messages from './langs'

export type LocaleType = keyof typeof messages

export const fallbackLocale: LocaleType = 'pt_br'
export const AVAILABLE_LOCALES = Object.keys(messages) as LocaleType[]

/**
 * Determines if a given locale is valid and exists in the available messages.
 * @param {string} locale - The locale to validate
 * @returns {boolean} Whether the locale is a valid LocaleType
 */
function isValidLocale(locale: string): locale is LocaleType {
  return locale in messages
}

/**
 * Retrieves the stored locale from local storage.
 * @returns {LocaleType | null} The stored locale or null if not found or an error occurs
 */
function getStoredLocale(): LocaleType | null {
  try {
    const stored = localStorage.getItem('language')?.toLowerCase()
    return stored && isValidLocale(stored) ? stored : null
  } catch (error) {
    console.warn('Failed to access localStorage:', error)
    return null
  }
}

/**
 * Retrieves the browser's locale.
 * @returns {LocaleType | null} The browser's locale or null if not found or an error occurs
 */
function getBrowserLocale(): LocaleType | null {
  try {
    const browserLang = navigator.language.toLowerCase().replace('-', '_')

    if (isValidLocale(browserLang)) {
      return browserLang
    }

    const baseLang = browserLang.split('_')[0] as string
    if (isValidLocale(baseLang)) {
      return baseLang
    }

    return null
  } catch (error) {
    console.warn('Failed to detect browser locale:', error)
    return null
  }
}

const initialLocale = getStoredLocale() ?? getBrowserLocale() ?? fallbackLocale

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale,
  messages,
})

const composer = i18n.global as unknown as Composer

/**
 * Retrieves the current locale.
 * @returns {LocaleType} The current locale
 */
export function getCurrentLocale(): LocaleType {
  return composer.locale.value as LocaleType
}

/**
 * Retrieves the available locales.
 * @returns {LocaleType[]} The available locales
 */
export function getAvailableLocales(): LocaleType[] {
  return AVAILABLE_LOCALES
}

/**
 * Changes the current locale.
 * @param locale - The locale to change to
 */
export function changeLanguage(locale: string) {
  if (!isValidLocale(locale)) {
    console.warn(`Invalid locale: ${locale}. Falling back to ${fallbackLocale}`)
    locale = fallbackLocale
  }

  composer.locale.value = locale

  try {
    localStorage.setItem('language', locale)
  } catch (error) {
    console.warn('Failed to save language preference:', error)
  }
}

/**
 * Toggles the language between the available locales.
 *
 * @param locales - An array of locales to toggle between. If not provided, defaults to ['pt_br', 'en'].
 */
export function toggleLanguage(locales?: LocaleType[]) {
  // Garantir que locales seja sempre um array válido
  const validLocales =
    Array.isArray(locales) && locales.length > 0 ? locales : (['pt_br', 'en'] as LocaleType[])

  const current = getCurrentLocale()
  const currentIndex = validLocales.indexOf(current)

  // Se o idioma atual não estiver na lista, usar o primeiro
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % validLocales.length
  const nextLocale = validLocales[nextIndex] as LocaleType
  changeLanguage(nextLocale)
}

export default i18n
