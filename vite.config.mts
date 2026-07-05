import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), tailwindcss()],
  server: {
    // honor the PORT env var (used by the preview tooling), default 3000 like CRA
    port: Number(process.env.PORT) || 3000,
  },
  build: {
    // keep CRA's output dir so `gh-pages -d build` keeps working
    outDir: "build",
  },
});
