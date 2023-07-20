import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { env } from "process";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": env,
  },
  plugins: [react()],
});
