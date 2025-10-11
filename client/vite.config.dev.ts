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
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@assets": path.resolve("../attached_assets"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: true
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
  }
});