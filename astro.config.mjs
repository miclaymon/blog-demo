import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://miclaymon.github.io",
  base: "blog-demo",
  markdown: {
    drafts: true,
  },
  integrations: [mdx({
    drafts: true,
  })],
});