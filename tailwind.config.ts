import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#C9A227", soft: "#E9D6A2" },
        pink: { soft: "#F6D6E0" }
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans]
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
