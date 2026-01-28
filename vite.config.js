import devtoolsJson from 'vite-plugin-devtools-json';
import { partytownVite } from '@qwik.dev/partytown/utils';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit(),
		partytownVite({ dest: join(__dirname, 'static', '~partytown') }),
		devtoolsJson()
	]
};

export default config;
