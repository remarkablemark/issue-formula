import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import { defineConfig, includeIgnoreFile } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactX from 'eslint-plugin-react-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsdoc from 'eslint-plugin-tsdoc';
import tseslint from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));
const rootDir = import.meta.dirname;

export default defineConfig(
  includeIgnoreFile(gitignorePath),

  // Files that should NOT use type-checked rules (not covered by tsconfig.json)
  {
    files: [
      '**/*.mjs',
      'eslint.config.mts',
      'src/index.js',
      'src/backend/**/*.js',
      'src/frontend/scripts/**/*.js',
      'src/frontend/vite.config.mts',
    ],

    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier,
      tsdoc,
    },

    extends: [js.configs.recommended, tseslint.configs.recommended],

    languageOptions: {
      parserOptions: {
        tsconfigRootDir: rootDir,
      },
    },

    rules: {
      'no-console': 'error',
      'prettier/prettier': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'tsdoc/syntax': 'error',
    },
  },

  // Files that should use type-checked rules (covered by tsconfig.json)
  {
    files: ['src/frontend/src/**/*.{ts,tsx}'],

    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier,
      tsdoc,
    },

    extends: [
      js.configs.recommended,
      reactDom.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      reactX.configs['recommended-typescript'],
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: rootDir,
      },
    },

    rules: {
      'no-console': 'error',
      'prettier/prettier': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'tsdoc/syntax': 'error',
    },
  },
);
