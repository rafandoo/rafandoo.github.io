import '#/assets/css/style.css'
import { createApp } from 'vue'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import i18n from '@/i18n'
import App from './App.vue'

const app = createApp(App)

app.use(i18n as never)
app.use(Vue3Toastify)

app.mount('#app', true)
