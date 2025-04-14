/// <reference types="vite/client" />
import tailwindcss from '@tailwindcss/vite'
import { config } from 'dotenv'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

config()

// Custom plugin to handle url parameter
const urlParamHandler = () => {
  return {
    name: 'url-param-handler',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Check if the request has a url parameter
        const url = new URL(req.url, `http://${req.headers.host}`)
        if (url.searchParams.has('url')) {
          // If it does, we'll handle it specially
          // This prevents Vite from trying to serve it as a file
          req.url = req.url.replace('?url=', '?viteUrl=')
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [tailwindcss(), ViteEjsPlugin(), imagetools(), ViteImageOptimizer(), urlParamHandler()],
  build: {
    target: 'esnext',
  },
  server: {
    host: true,
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    proxy: {
      '/websocket': {
        target: 'ws://localhost:8787',
        ws: true,
      },
    },
    allowedHosts: true,
    middlewareMode: false,
  },
  optimizeDeps: {
    exclude: ['@tailwindcss/vite'],
  },
})
