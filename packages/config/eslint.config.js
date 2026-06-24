export default [
  {
    ignores: ["dist/**", "build/**", ".next/**", "node_modules/**", "coverage/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-console": "error",
      "no-debugger": "error",
    },
  },
]
