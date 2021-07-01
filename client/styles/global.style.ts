import { createGlobalStyle } from "styled-components";
import { montserratRegularAlt, montserratThinAlt } from "./font.style";
import { flexy } from "./mixin.style";

export const GlobalStyle = createGlobalStyle`
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
		${montserratThinAlt}
		font-size: 1.1rem;
		color: ${({ theme }) => theme.colors.danger};
		margin: 2px 0;
	}

	.link__text {
		${montserratRegularAlt}
		font-size: 1.4rem;
		text-align: center;
		a{
			color: ${({ theme }) => theme.colors.primary}
		}
	}

	.slick__arrow_container{
		width: 10rem;
		${flexy}
		justify-content: space-between;
		button{
			width: 40px;
			height: 40px;
			background-color: ${({ theme }) => theme.colors.white};
			border-radius: 50%;
			${flexy}
			justify-content: center;
			svg{
				width: 28px;
				height: 20px;
			}
		}
	}

	.transparent__button{
		border:none;
		background-color: transparent;
	}

	.pagination_container{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

		/* Change Autocomplete styles in Chrome*/
		input:-webkit-autofill,
		input:-webkit-autofill:hover, 
		input:-webkit-autofill:focus,
		textarea:-webkit-autofill,
		textarea:-webkit-autofill:hover,
		textarea:-webkit-autofill:focus,
		select:-webkit-autofill,
		select:-webkit-autofill:hover,
		select:-webkit-autofill:focus {
			box-shadow: ${({ theme }) => `0 0 0px 1000px ${theme.colors.white} inset`};
		-webkit-box-shadow: ${({ theme }) => `0 0 0px 1000px ${theme.colors.white} inset`};
		transition: background-color 5000s ease-in-out 0s;
		}

`;
