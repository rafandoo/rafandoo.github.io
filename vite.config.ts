import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/main/vue', import.meta.url)),
      '#': fileURLToPath(new URL('./src/main/resources', import.meta.url))
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss()
  ],
  publicDir: 'public'
})
