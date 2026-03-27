import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
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
