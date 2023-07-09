/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"outline-light": "#E5E7EB",
				"outline-dark": "#262626",
				"secondary-light": "#F3F4F6",
				"secondary-dark": "#171717",
			},
		},
	},
	plugins: [],
};
