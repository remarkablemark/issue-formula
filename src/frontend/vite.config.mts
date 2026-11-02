import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',

  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'atlaskit',
              test: /node_modules\/@atlaskit\//,
            },
            {
              name: 'react',
              test: /node_modules\/(react|react-dom)\//,
            },
          ],
        },
      },
    },
    sourcemap: true,
  },

  plugins: [react()],

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setupTests.ts'],
    coverage: {
      exclude: [
        'dist/',
        'node_modules/',
        'scripts/',
        'src/env/',
        'src/types/',
        'vite.config.mts',
      ],
      thresholds: {
        100: true,
      },
    },
  },
});
