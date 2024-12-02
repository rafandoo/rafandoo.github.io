import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { viteObfuscateFile } from 'vite-plugin-obfuscator';

export default defineConfig({
    build: {
        minify: 'terser',
        outDir: './dist',
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag === 'ion-icon',
                },
            },
        }),
        vueDevTools(),
        viteObfuscateFile({
            globalOptions: {
                compact: true,
                controlFlowFlattening: true,
                deadCodeInjection: true,
                debugProtection: true,
                disableConsoleOutput: true,
                identifierNamesGenerator: 'hexadecimal',
                stringArray: true,
                stringArrayEncoding: ['rc4'],
            },
            exclude: ['node_modules/**'],
        }),
    ],
});
