import { partytownVite } from '@qwik.dev/partytown/utils';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { join } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		enhancedImages(),
		sveltekit(),
		partytownVite({
			dest: join(__dirname, 'static', '~partytown')
		})
	]
};

export default config;
