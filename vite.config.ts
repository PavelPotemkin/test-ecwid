import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  console.log(process.env);

  return {
    plugins: [
      vue(),
      VueDevTools(),
    ],
    base: process.env.VITE_BASE_URL,
    server: {
      host: '0.0.0.0',
      port: process.env.VITE_PORT as unknown as number,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
