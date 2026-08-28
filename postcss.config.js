import postcssDesignTokenUtils from "postcss-design-token-utils";

const tokens = {
	color: {
		accent: "#16a34a",
		dark: "#111827",
		light: "#f3f4f6",
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
