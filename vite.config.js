import { partytownVite } from '@qwik.dev/partytown/utils';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { join } from 'path';
import tailwindcss from '@tailwindcss/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit(),
		partytownVite({
			dest: join(__dirname, 'static', '~partytown')
		})
	]
};

export default config;
