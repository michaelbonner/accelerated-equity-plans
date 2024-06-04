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
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
