import postcssDesignTokenUtils from "postcss-design-token-utils";

const tokens = {
	color: {
		surface: "#fff",
		accent: { 500: "#16a34a" },
		neutral: { 900: "#111827", 100: "#f3f4f6" },
	},
	colorDark: {
		surface: "#000",
		accent: { 500: "#23963f" },
		neutral: { 900: "#f3f4f6", 100: "#111827" },
	},
	space: {
		xs: "0.25rem",
		s: "0.5rem",
		m: "1rem",
		l: "2rem",
	},
};

export default {
	plugins: [
		postcssDesignTokenUtils({
			tokens,
			customProperties: [
				{
					id: "colorDark",
					prefix: "color",
					group: "dark",
				},
			],
			utilityClasses: [
				{
					id: "color",
					property: "background-color",
					prefix: "bg",
				},
			],
		}),
	],
};
