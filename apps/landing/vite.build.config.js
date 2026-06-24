export default {
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
      "zustand"
    ],
  },
  build: {
    outDir: "dist",
  },
}
