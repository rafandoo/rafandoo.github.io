import '#/assets/css/style.css'
import { createApp } from 'vue'

import App from '@/App.vue'
import i18n from '@/i18n'
import router from '@/router'
import { vReveal } from '@/composables/useReveal'

const app = createApp(App)

app.use(i18n as never)

app.directive('reveal', vReveal)

app.use(router)

app.mount('#app')
