import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Connect } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type PreviewServer, type ViteDevServer } from 'vite'

const root = path.dirname(fileURLToPath(import.meta.url))

function serveProjectDemoIndex() {
  const middleware: Connect.NextHandleFunction = (req, _res, next) => {
    const url = req.url?.split('?')[0] ?? ''
    const match = url.match(/^\/demos\/([^/]+)\/?$/)
    if (!match) {
      next()
      return
    }

    const slug = match[1]
    const indexPath = path.join(root, 'public', 'demos', slug, 'index.html')
    if (fs.existsSync(indexPath)) {
      req.url = `/demos/${slug}/index.html${req.url?.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''}`
    }
    next()
  }

  return {
    name: 'serve-project-demo-index',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server: PreviewServer) {
      server.middlewares.use(middleware)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), serveProjectDemoIndex()],
  resolve: {
    alias: {
      '@': path.resolve(root, './src'),
    },
  },
})
