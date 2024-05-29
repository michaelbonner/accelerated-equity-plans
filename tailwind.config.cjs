/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				serif: ['Lora', ...defaultTheme.fontFamily.serif],
				jura: ['Jura', 'sans-serif']
			},
			backgroundImage: {
				'slc-night': 'url(/images/slcatnight.jpg)',
				'red-blue-ribbon': 'url(/images/redblueribbon.png)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
