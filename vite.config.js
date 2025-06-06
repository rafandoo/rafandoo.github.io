import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
    build: {
        minify: 'terser',
        outDir: './dist'
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src/main/vue', import.meta.url)),
            '#': fileURLToPath(new URL('./src/main/resources', import.meta.url))
        }
    },
    plugins: [
        vue({
            template: {
                compilerOptions: {}
            }
        }),
        vueDevTools(),
        tailwindcss()
    ]
});
