import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF7",
        foreground: "#1A1A1A",
        border: "#000000",
        redTeaming: "#DC143C",
        blueTeaming: "#003087",
        yellowTeaming: "#B8860B",
        whiteTeaming: "#2D0057",
        nullTeaming: "#1A1A1A",
      },
      borderWidth: {
        brutal: "3px",
      },
    },
  },
  plugins: [],
}

export default config
