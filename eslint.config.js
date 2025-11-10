import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default [
  // Global ignores
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '*.config.*']
  },
  
  // Base configuration for all files
  js.configs.recommended,
  
  // TypeScript configuration
  ...tseslint.configs.recommended,
  
  // Main configuration for TypeScript and React files
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      'unused-imports': unusedImports,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React Hook Rules
      ...reactHooks.configs.recommended.rules,
      
      // React Refresh Rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // React Rules
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/no-array-index-key': 'warn',
      'react/no-children-prop': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-render-return-value': 'error',
      'react/no-string-refs': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unknown-property': 'error',
      'react/no-unsafe': 'error',
      'react/prop-types': 'off', // Using TypeScript instead
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/require-render-return': 'error',
      'react/self-closing-comp': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-curly-brace-presence': ['warn', 'never'],
      'react/jsx-fragments': ['warn', 'syntax'],
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-pascal-case': 'error',
      
      // Accessibility Rules (relaxed for development)
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-has-content': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/heading-has-content': 'warn',
      'jsx-a11y/img-redundant-alt': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/mouse-events-have-key-events': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-redundant-roles': 'warn',
      
      // Unused Imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      
      // TypeScript Strict Rules
      '@typescript-eslint/no-unused-vars': 'off', // Using unused-imports instead
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn', // Warning instead of error
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      
      // General Code Quality Rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'warn',
      'object-shorthand': 'warn',
      'prefer-destructuring': 'warn',
      'no-duplicate-imports': 'error',
      'no-useless-rename': 'warn',
    },
  },
  
  // Test files configuration
  {
    files: ['**/*.test.{ts,tsx}', '**/__tests__/**/*.{ts,tsx}', '**/setupTests.ts'],
    rules: {
      // Relax some rules for test files
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
]
