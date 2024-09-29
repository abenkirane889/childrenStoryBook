import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: true,
    outDir: "dist", // Assure-toi que le dossier de sortie est "dist"
  },
});
