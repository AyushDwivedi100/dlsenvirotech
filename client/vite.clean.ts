import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Minimal, working config with no problematic plugins
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@assets": path.resolve("../attached_assets"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5000,
    allowedHosts: true,  // This fixes the host blocking issue
    hmr: { 
      clientPort: 443  // Required for Replit preview
    }
  },
  build: {
    target: "esnext",
    minify: "esbuild",
  },
  root: "."
});