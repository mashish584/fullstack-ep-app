const commonThemeColors = {
	primary: "#FC6868",
	secondary: "#262728",
	darkGray: "#C4C4C4",
	success: "#7EDB76",
	danger: "#EB5757",
	white: "#FFFFFF",
	black: "#000000",
};

export const fonts = {
	lato: "'Lato', san-serif",
	workSans: "'Work Sans', sans-serif",
};

export const fontSizes = {
	thin: 300,
	regular: 400,
	medium: 500,
	semiBold: 600,
	bold: 700,
	black: 900,
};

export const spacing = {
	authScreenHS: "10rem",
};

export const lightTheme = {
	colors: {
		...commonThemeColors,
		background: "#FFFFFF",
		textColor: "#262728",
	},
	baseFontSize: "62.5%",
	fonts,
	fontSizes,
	spacing,
};

export const darkTheme = {
	colors: {
		...commonThemeColors,
		background: "#262728",
		textColor: "#f5f5f5",
	},
	baseFontSize: "62.5%",
	fonts,
	fontSizes,
	spacing,
};
