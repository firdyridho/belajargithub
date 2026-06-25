import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Original teaming tokens for backwards compatibility
        "red-teaming": "#DC143C",
        "blue-teaming": "#003087",
        "yellow-teaming": "#B8860B",
        "white-teaming": "#2D0057",
        "null-teaming": "#1A1A1A",

        // Theme-swapped variables (defined in index.css)
        background: "var(--color-background)",
        "on-background": "var(--color-on-background)",
        surface: "var(--color-surface)",
        "on-surface": "var(--color-on-surface)",
        "surface-dim": "var(--color-surface-dim)",
        "surface-bright": "var(--color-surface-bright)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container": "var(--color-surface-container)",
        "surface-container-high": "var(--color-surface-container-high)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        outline: "var(--color-outline)",
        "outline-variant": "var(--color-outline-variant)",
        "inverse-surface": "var(--color-inverse-surface)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",
        "white-team": "var(--color-white-team)",

        // Static functional colors
        primary: "#0056b3",
        "on-primary": "#ffffff",
        "primary-container": "#1e6fd9",
        "on-primary-container": "#f7f7ff",
        secondary: "#bb0017",
        "on-secondary": "#ffffff",
        "secondary-container": "#e41f28",
        "on-secondary-container": "#fffbff",
        tertiary: "#7033c7",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#8a50e1",
        "on-tertiary-container": "#fdf5ff",
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        // Guild & Team colors
        "purple-guild": "#7A3FD1",
        "green-guild": "#2E9E5B",
        "orange-guild": "#E8821E",
        "red-team": "#E8232A",
        "blue-team": "#1E6FD9",
        "yellow-team": "#E8B400",
        "status-ok": "#2E9E5B",
        "status-degraded": "#E8B400",
        "status-down": "#E8232A",
      },
      spacing: {
        gutter: "24px",
        "margin-desktop": "64px",
        "margin-mobile": "16px",
        "container-max": "1280px",
        unit: "4px",
      },
      fontFamily: {
        h1: ["Inter", "sans-serif"],
        h2: ["Inter", "sans-serif"],
        h3: ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "display-lg": ["Space Grotesk", "sans-serif"],
        "display-lg-mobile": ["Space Grotesk", "sans-serif"],
        "label-caps": ["JetBrains Mono", "monospace"],
        "mono-code": ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      fontSize: {
        h3: ["20px", { lineHeight: "1.4", fontWeight: "600" }],
        h2: ["28px", { lineHeight: "1.4", fontWeight: "600" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
        "display-lg-mobile": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        h1: ["36px", { lineHeight: "1.3", fontWeight: "700" }],
        "mono-code": ["14px", { lineHeight: "1.5", fontWeight: "400" }]
      },
    },
  },
  plugins: [],
}

export default config
