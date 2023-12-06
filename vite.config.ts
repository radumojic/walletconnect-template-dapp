import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig, loadEnv } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: {
      port: Number(process.env.PORT) || 3000,
      strictPort: true,
      host: true,
      https: true,
      watch: {
        usePolling: false,
        useFsEvents: false
      },
      hmr: {
        overlay: false
      }
    },
    plugins: [
      react(),
      basicSsl(),
      tsconfigPaths(),
      svgrPlugin(),
      nodePolyfills({
        globals: { Buffer: true, global: true, process: true }
      })
    ],
    build: {
      outDir: 'build'
    },
    define: {
      'process.env': process.env
    },
    preview: {
      port: 3002,
      https: true,
      host: 'localhost',
      strictPort: true
    }
  });
};
