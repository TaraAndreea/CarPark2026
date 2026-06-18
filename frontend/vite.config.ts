import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // Import .svg as a React component using the `?react` query suffix,
        // e.g. `import SortIcon from './sort.svg?react'`.
        svgr(),
    ],
    server: {
        port: 3000,
        proxy: {
            // Forward /api requests to the json-server instance to avoid CORS.
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
            }
        },
    }
})
