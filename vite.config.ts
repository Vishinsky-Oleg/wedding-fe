import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, './src/pages'),
      app: path.resolve(__dirname, './src/app'),
      hooks: path.resolve(__dirname, './src/hooks'),
      components: './src/components',
    },
  },
});
