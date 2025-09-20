// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  base: "/hantheia",
  devToolbar: {
    enabled: false
  },
  site: "https://nerocro.github.io",
  server: { port: 3000 },
});
