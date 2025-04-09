import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, PluginOption } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()] as PluginOption[],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/hiking-trail/dist/',
})