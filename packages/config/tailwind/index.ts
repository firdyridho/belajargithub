import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00ff9d",
          dim: "#00cc7a",
          dark: "#001a0d",
        },
        surface: {
          base: "#0a0a0f",
          elevated: "#12121a",
          overlay: "#1a1a26",
          border: "#2a2a3d",
        },
        rank: {
          void: "#6b7280",
          cipher: "#3b82f6",
          packet: "#8b5cf6",
          forge: "#f59e0b",
          breach: "#ef4444",
          sentinel: "#00ff9d",
        },
        status: {
          operational: "#22c55e",
          degraded: "#f59e0b",
          outage: "#ef4444",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        md: "0.625rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      animation: {
        "rank-up": "rankUp 0.8s cubic-bezier(0.16,1,0.3,1)",
        "pulse-green": "pulseGreen 2s infinite",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        rankUp: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGreen: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
}

export default config
