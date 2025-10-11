import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    runtimeErrorOverlay(),
    // REMOVED cartographer plugin - it was causing transform errors
  ],
  resolve: {
    alias: {
      "@": path.resolve("client/src"),
      "@assets": path.resolve("attached_assets"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5000,
    allowedHosts: true,  // FIXED: true instead of ['all'] for host blocking
    hmr: { 
      clientPort: 443  // FIXED: Required for Replit preview
    }
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
  },
  root: "client"
});