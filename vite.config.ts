import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        pages: path.resolve(__dirname, './src/pages'),
        app: path.resolve(__dirname, './src/app'),
        hooks: path.resolve(__dirname, './src/hooks'),
        types: path.resolve(__dirname, './src/types'),
        utils: path.resolve(__dirname, './src/utils'),
        components: path.resolve(__dirname, './src/components'),
      },
    },
    define: {
      'process.env': env,
    },
  };
});
