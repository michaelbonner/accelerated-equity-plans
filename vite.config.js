import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { partytownVite } from '@builder.io/partytown/utils';
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
