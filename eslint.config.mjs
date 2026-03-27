import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactX from 'eslint-plugin-react-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsdoc from 'eslint-plugin-tsdoc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));
const rootDir = import.meta.dirname;

export default tseslint.config(
  includeIgnoreFile(gitignorePath),

  { ignores: ['coverage/', 'dist/'] },

  // Files that should NOT use type-checked rules (not covered by tsconfig.json)
  {
    files: [
      '**/*.mjs',
      'eslint.config.mjs',
      'src/index.js',
      'src/backend/**/*.js',
      'src/frontend/scripts/**/*.js',
      'src/frontend/vite.config.mts',
    ],

    plugins: {
      'simple-import-sort': simpleImportSort,
      eslint,
      prettier,
      tsdoc,
    },

    extends: [eslint.configs.recommended, tseslint.configs.recommended],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'prettier/prettier': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },

  // Files that should use type-checked rules (covered by tsconfig.json)
  {
    files: ['src/frontend/src/**/*.{ts,tsx}'],

    plugins: {
      'simple-import-sort': simpleImportSort,
      eslint,
      prettier,
      tsdoc,
    },

    extends: [
      eslint.configs.recommended,
      reactDom.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      reactX.configs['recommended-typescript'],
      tseslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vitest,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: rootDir,
      },
    },

    rules: {
      '@typescript-eslint/no-deprecated': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'no-console': 'error',
      'no-debugger': 'error',
      'prettier/prettier': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
);
