import { createI18n } from 'vue-i18n'
import pt_br from '@/main/vue/langs/pt_br'
import en from '@/main/vue/langs/en'

const messages = {
    pt_br,
    en,
}

export default createI18n({
    legacy: false,
    locale: localStorage.getItem('language') || 'pt_br',
    messages,
})
