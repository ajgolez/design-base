import { defineConfig } from "tsup";

// Export the tsup configuration
export default defineConfig({
  // Specify the entry point for the build process
  entry: ["src/index.ts"],

  // Clean the output directory (`dist/`) before building
  clean: true,

  // Specify external dependencies that should not be bundled (e.g., React)
  external: ["react"],

  // Define the output formats for the build: ES Modules (esm) and CommonJS (cjs)
  format: ["esm", "cjs"],

  // Generate TypeScript declaration files (`.d.ts`) for the package
  dts: true,
});
