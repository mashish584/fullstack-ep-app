import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*,
	html,
	body{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}

	html,
	body,
	div	{
		height: 100%;
		min-height: 100%;
	}

	html{
		font-size: ${(props) => props.theme.baseFontSize};
	}

	*:disabled{
		cursor:no-drop !important;
		opacity:0.5;
	}
`;
