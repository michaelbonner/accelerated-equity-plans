/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['roboto', ...defaultTheme.fontFamily.sans],
				serif: ['Lora', ...defaultTheme.fontFamily.serif],
				eurostile: ['eurostile', 'sans-serif']
			},
			backgroundImage: {
				'slc-night': 'url(/images/slcatnight.jpg)',
				'red-blue-ribbon': 'url(/images/redblueribbon.png)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
