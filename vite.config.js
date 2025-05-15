import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindscss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [react(), tailwindscss()],
  base: "/",
});
