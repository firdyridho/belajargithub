import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-teaming": "#DC143C",
        "blue-teaming": "#003087",
        "yellow-teaming": "#B8860B",
        "white-teaming": "#2D0057",
        "null-teaming": "#1A1A1A",
      },
    },
  },
  plugins: [],
}

export default config
