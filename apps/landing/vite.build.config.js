import react from "@vitejs/plugin-react"

export default {
  plugins: [react()],
  optimizeDeps: {
    noDiscovery: true,
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "lucide-react",
      "react-hook-form",
      "zod",
      "@hookform/resolvers/zod",
      "zustand",
      "ogl"
    ],
  },
  build: {
    outDir: "dist",
  },
}
