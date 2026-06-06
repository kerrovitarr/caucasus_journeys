import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f1e7",
        paper: "#fffaf2",
        wine: "#681f2a",
        pomegranate: "#9f2f36",
        terracotta: "#b96543",
        gold: "#c39b55",
        forest: "#1d342b",
        stone: "#807768",
        ink: "#1c1714"
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Avenir Next", "Inter", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(28, 23, 20, 0.12)",
        lift: "0 26px 80px rgba(28, 23, 20, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
