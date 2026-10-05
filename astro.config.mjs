// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({

  integrations: [mdx()],

  markdown: {

    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),

    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
  },

  },
  
});