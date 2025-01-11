import { defineConfig } from "vite"; // Import the helper function to define the Vite configuration.
import react from "@vitejs/plugin-react"; // Import the React plugin for Vite to enable React and JSX support.

export default defineConfig({
  plugins: [react()], // Add the React plugin to the Vite configuration to support React syntax and JSX.
  server: {
    open: true, // Automatically opens the browser on server start
  },
});
