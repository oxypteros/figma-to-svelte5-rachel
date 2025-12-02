import devtoolsJson from "vite-plugin-devtools-json";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import { sveltekit } from "@sveltejs/kit/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import { enhancedImages } from "@sveltejs/enhanced-img";
import Icons from "unplugin-icons/vite";
export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    devtoolsJson(),
    enhancedImages(),
    Icons({
      compiler: "svelte",
      customCollections: {
        rachel: FileSystemIconLoader("./src/lib/icons", (svg) => {
          return svg.replace(/^<svg /, '<svg aria-hidden="true" focusable="false" role="img" ');
        })
      }
    })
  ],
  test: {
    expect: { requireAssertions: true },
    projects: [
      {
        extends: "./vite.config.ts",
        test: {
          name: "client",
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: "chromium", headless: true }]
          },
          include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
          exclude: ["src/lib/server/**"]
        }
      },
      {
        extends: "./vite.config.ts",
        test: {
          name: "server",
          environment: "node",
          include: ["src/**/*.{test,spec}.{js,ts}"],
          exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"]
        }
      }
    ]
  }
});
