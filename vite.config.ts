import { defineConfig, loadEnv } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths'



export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const API_URL = `${env.VITE_API_URL ?? 'http://localhost:5173'}`;

  return {
    plugins: [TanStackRouterVite({ autoCodeSplitting: true }), viteReact(), tsconfigPaths()],
    test: {
      globals: true,
      environment: 'jsdom',
    },
      server: {
      proxy: {
        '/api': {
          target: API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});