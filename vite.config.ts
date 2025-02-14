import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: mode === "development", // Source maps only in dev
    minify: mode === "production" ? "esbuild" : false, // Minify only in production
    cssCodeSplit: true, // Optimize CSS by splitting it into separate files
    chunkSizeWarningLimit: 500, // Increase warning limit for chunk size
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Extract dependencies to a separate file
          }
        },
      },
    },
  },
  esbuild: {
    legalComments: "none", // Removes license comments from the output
    drop: mode === "production" ? ["console", "debugger"] : [], // Remove console logs in production
  },
  define: {
    "process.env.NODE_ENV": `"${mode}"`, // Define environment variable
  },
}));
