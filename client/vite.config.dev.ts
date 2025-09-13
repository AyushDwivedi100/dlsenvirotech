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
    allowedHosts: [
      'localhost',
      '0.0.0.0', 
      'e5f29d95-aced-47dc-9e59-aacf5670329f-00-2z95y2kmouw25.worf.replit.dev',
      /\.replit\.dev$/,
      /\.worf\.replit\.dev$/
    ]
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
  }
});