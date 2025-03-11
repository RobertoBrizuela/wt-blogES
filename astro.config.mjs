// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://edgarbrz.github.io',
	base: '/wt-blogES',
	integrations: [mdx()],
});
