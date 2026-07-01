import { fileURLToPath, URL } from 'node:url'
import { readFileSync } from 'node:fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools({
      launchEditor: 'webstorm',
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/main/vue', import.meta.url)),
      '#': fileURLToPath(new URL('./src/main/resources', import.meta.url)),
    },
  },
  preview: (() => {
    try {
      return {
        https: {
          key: readFileSync('./certs/key.pem'),
          cert: readFileSync('./certs/cert.pem'),
        },
      }
    } catch {
      return {}
    }
  })(),
})
