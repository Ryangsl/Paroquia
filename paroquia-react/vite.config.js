import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function adminApiPlugin() {
  const dataDir = resolve(__dirname, 'src/data')

  return {
    name: 'admin-api',
    configureServer(server) {
      server.middlewares.use('/api/admin/data', (req, res) => {
        if (req.method !== 'GET') { res.statusCode = 405; res.end(); return }
        try {
          const home = JSON.parse(readFileSync(resolve(dataDir, 'home.json'), 'utf-8'))
          const events = JSON.parse(readFileSync(resolve(dataDir, 'events.json'), 'utf-8'))
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ home, events }))
        } catch (e) {
          res.statusCode = 500; res.end(JSON.stringify({ error: e.message }))
        }
      })

      server.middlewares.use('/api/admin/notices', (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end(); return }
        let body = ''
        req.on('data', chunk => { body += chunk })
        req.on('end', () => {
          try {
            const filePath = resolve(dataDir, 'home.json')
            const home = JSON.parse(readFileSync(filePath, 'utf-8'))
            home.notices = JSON.parse(body)
            writeFileSync(filePath, JSON.stringify(home, null, 2))
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch (e) {
            res.statusCode = 500; res.end(JSON.stringify({ error: e.message }))
          }
        })
      })

      server.middlewares.use('/api/admin/events', (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end(); return }
        let body = ''
        req.on('data', chunk => { body += chunk })
        req.on('end', () => {
          try {
            const filePath = resolve(dataDir, 'events.json')
            const events = JSON.parse(readFileSync(filePath, 'utf-8'))
            events.upcomingEvents.events = JSON.parse(body)
            writeFileSync(filePath, JSON.stringify(events, null, 2))
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch (e) {
            res.statusCode = 500; res.end(JSON.stringify({ error: e.message }))
          }
        })
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), adminApiPlugin()],
})
