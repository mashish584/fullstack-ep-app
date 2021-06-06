import { DefaultTheme } from "styled-components/native";

type colorTypes = {
	primary: string;
	secondary: string;
	darkGray: string;
	success: string;
	danger: string;
	white: string;
	lightBg: string;
	black: string;
	blackDim: string;
	background: string;
	textColor: string;
};

type fontSizeTypes = {
	thin: number;
	regular: number;
	medium: number;
	semiBold: number;
	bold: number;
	black: number;
};

declare module "styled-components" {
	export interface DefaultTheme {
		colors: colorTypes;
		inputBg: string;
		fonts: {
			montserrat: string;
		};
		fontSizes: fontSizeTypes;
	}
}

const commonThemeColors = {
	primary: "#FC6868",
	secondary: "#262728",
	darkGray: "#C4C4C4",
	success: "#7EDB76",
	danger: "#EB5757",
	white: "#FFFFFF",
	lightBg: "#F5F5F5",
	black: "#000000",
	blackDim: "#36373C",
};

export const fonts = {
	montserrat: "'Montserrat Alternates', sans-serif",
};

export const fontSizes = {
	thin: 300,
	regular: 400,
	medium: 500,
	semiBold: 600,
	bold: 700,
	black: 900,
};

export const lightTheme: DefaultTheme = {
	colors: {
		...commonThemeColors,
		background: "#FFFFFF",
		textColor: "#262728",
	},
	inputBg: "#F2F2F2",
	fonts,
	fontSizes,
};
