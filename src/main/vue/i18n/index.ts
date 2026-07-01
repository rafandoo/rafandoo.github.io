import { type Composer, createI18n } from 'vue-i18n'

import messages from '@/i18n/langs'

export type LocaleType = keyof typeof messages

export const fallbackLocale: LocaleType = 'pt_br'
export const AVAILABLE_LOCALES = Object.keys(messages) as LocaleType[]
const DEFAULT_TOGGLE_LOCALES: LocaleType[] = ['pt_br', 'en']

export const LOCALE_DISPLAY_NAMES: Record<LocaleType, string> = {
  pt_br: 'PT',
  en: 'EN',
}

const STORAGE_KEY = 'language'

function isValidLocale(locale: string): locale is LocaleType {
  return locale in messages
}

function getStoredLocale(): LocaleType | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)?.toLowerCase()
    return stored && isValidLocale(stored) ? stored : null
  } catch (error) {
    console.warn('Failed to access localStorage:', error)
    return null
  }
}

function getBrowserLocale(): LocaleType | null {
  try {
    const browserLang = navigator.language.toLowerCase().replace('-', '_')

    if (isValidLocale(browserLang)) {
      return browserLang
    }

    const [baseLang] = browserLang.split('_')
    return baseLang && isValidLocale(baseLang) ? baseLang : null
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

export function getCurrentLocale(): LocaleType {
  return composer.locale.value as LocaleType
}

export function getAvailableLocales(): LocaleType[] {
  return AVAILABLE_LOCALES
}

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

export function toggleLanguage(locales: LocaleType[] = DEFAULT_TOGGLE_LOCALES) {
  const validLocales = locales.length > 0 ? locales : DEFAULT_TOGGLE_LOCALES

  const current = getCurrentLocale()
  const currentIndex = validLocales.indexOf(current)

  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % validLocales.length
  changeLanguage(validLocales[nextIndex])
}

export default i18n
