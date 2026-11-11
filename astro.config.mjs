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

    processor: unified({ // for LaTeX rendering
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),

    shikiConfig: { //For codeblocks styling
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
  },

  },
  
});