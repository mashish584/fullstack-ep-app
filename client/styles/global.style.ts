import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ themeColor: string }>`
	*,
	html,
	body{
		margin:0;
		padding:0;
		box-sizing:border-box;
		outline-color: ${({ themeColor }) => themeColor}
	}

	html,
	body{
		height: 100%;
		min-height: 100%;
	}

	html{
		font-size: 62.5%;

	}

	*:disabled{
		cursor:no-drop !important;
		opacity:0.5;
	}

	#__next{
		height:100%;
	}
`;
