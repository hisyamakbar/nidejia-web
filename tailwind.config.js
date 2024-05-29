/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js}"],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1280px",
			},
		},
		extend: {
			backgroundImage: {
				"hero-img": "linear-gradient(90deg, #000 3.32%, rgba(0, 0, 0, 0) 98.01%), url('/assets/images/hero-img.jpg')",
				"card-deals-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 45.8%, #050211 86.79%)",
				"card-benefits-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 30.03%, #050211 100%)",
			},
		},
	},
	plugins: [],
};
