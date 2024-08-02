/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					lighter: "#6366f1",
					default: "#4338ca",
					dark: "#3730a3",
				},
			},
		},
	},
	plugins: [],
}
