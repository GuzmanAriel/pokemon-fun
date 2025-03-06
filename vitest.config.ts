import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "jsdom", // Ensures a browser-like environment
    globals: true, // Allows using `test`, `expect` globally
  },
});
