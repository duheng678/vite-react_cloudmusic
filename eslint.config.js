import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // 将未使用变量从 error 降级为 warn（显示黄色警告线）
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'off', // 关闭基础规则，使用 TypeScript 版本
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
])
