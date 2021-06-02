import { createGlobalStyle } from "styled-components";
import { lightTheme } from "../utils/theme";
import { workSansThin } from "./font.style";

export const GlobalStyle = createGlobalStyle<{ theme: typeof lightTheme }>`
	*,
	html,
	body{
		margin:0;
		padding:0;
		box-sizing:border-box;
		/* outline-color: ${({ theme }) => theme.colors.primary} */
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

	.error__message{
		${workSansThin}
		font-size: 11;
		color: ${({ theme }) => theme.colors.danger};
		margin: 2px 0;
	}
`;
