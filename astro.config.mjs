import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://abaut.nl",
  output: "static",
  trailingSlash: "always",
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
