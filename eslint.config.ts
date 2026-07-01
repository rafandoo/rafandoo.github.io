import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginImport from 'eslint-plugin-import-x'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import eslintPluginVueScopedCSS from 'eslint-plugin-vue-scoped-css'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import tailwind from 'eslint-plugin-tailwindcss'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/.vite/**',
    './src/main/docker/**',
    '**/coverage/**',
  ]),

  // @ts-expect-error flat config typing broken
  ...eslintPluginVueScopedCSS.configs.recommended,

  {
    plugins: {
      import: pluginImport,
      'unused-imports': pluginUnusedImports,
      'vue-scoped-css': eslintPluginVueScopedCSS,
    },
    extends: [
      pluginVue.configs['flat/essential'],
      vueTsConfigs.recommended,
      skipFormatting,
      tailwind.configs.recommended,
    ],
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      /**
       * Vue
       */
      'vue/multi-word-component-names': 'off',

      /**
       * Imports
       */
      'import/extensions': [
        'error',
        'never',
        {
          ts: 'never',
          tsx: 'never',
          js: 'never',
          jsx: 'never',
          vue: 'always',
          json: 'always',
        },
      ],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'import/no-cycle': 'warn',

      /**
       * Remove imports não usados automaticamente
       */
      'unused-imports/no-unused-imports': 'error',

      /**
       * TS / JS geral
       */
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': 'warn',
    },
  },
)
