import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.VITE_BUILD_PATH || "/portfolio/", // Uses env var or defaults to /portfolio/ for GitHub Pages
  plugins: [react()],
});