/* eslint-env node */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // 👇 User-site repo = must be "/"
  base: "/",

  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },

  server: {
    host: true,
    allowedHosts: [
      "propagatory-ernestina-sightliest.ngrok-free.dev",
    ],
  },
});
