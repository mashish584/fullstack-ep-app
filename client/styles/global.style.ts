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
		background-color: ${({ theme }) => theme.colors.lightBg};
	}

	html{
		font-size: 62.5%;
	}

	*:disabled{
		cursor:no-drop !important;
		opacity:0.5;
	}

	#__next{
		position: relative;
		max-width: 144rem;
		height:100%;
		margin: 0 auto;
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

	.slick-arrow{
		display: none !important;
	}

	.transparent__button{
		border:none;
		background-color: transparent;
		cursor: pointer;
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



/* NProgress Bar */
#nprogress {
	pointer-events: none;
}

#nprogress .bar {
	background: ${({ theme }) => theme.colors.primary};
	position: fixed;
	z-index: 1031;
	top: 0;
	left: 0;
	width: 100%;
	height: 5px;
}

/* Fancy blur effect */
#nprogress .peg {
	display: block;
	position: absolute;
	right: 0px;
	width: 100px;
	height: 100%;
	box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}, 0 0 5px ${({ theme }) => theme.colors.primary};
	opacity: 1;

	-webkit-transform: rotate(3deg) translate(0px, -4px);
	-ms-transform: rotate(3deg) translate(0px, -4px);
	transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
	display: block;
	position: fixed;
	z-index: 1031;
	top: 15px;
	right: 15px;
}

#nprogress .spinner-icon {
	width: 18px;
	height: 18px;
	box-sizing: border-box;

	border: solid 2px transparent;
	border-top-color: ${({ theme }) => theme.colors.primary};
	border-left-color: ${({ theme }) => theme.colors.primary};
	border-radius: 50%;

	-webkit-animation: nprogress-spinner 400ms linear infinite;
	animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
	overflow: hidden;
	position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
	position: absolute;
}

@-webkit-keyframes nprogress-spinner {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}
@keyframes nprogress-spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.skelton {
	background: #f5f5f5;
	margin: 10px 0;
	border-radius: 4px;
}
  
  .skelton.text {
    width: 100%;
    height: 12px;
  }
  
  .skelton.heading {
    width: 50%;
    height: 20px;
  }
  
  .skelton.thumbnail {
    width: 100px;
    height: 100px;
    border-radius: 4px;
  }

  .skelton.button {
    width: 250px;
    height: 60px;
    border-radius: 10px;
  }
  
  .skelton.avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  
  .skelton-wrapper {
    margin: 25px auto;
    padding: 10px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }
  
  .skelton-profile {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
  }
  
  .skelton-wrapper.light {
    background: #f2f2f2;
  }
  
  .skelton-wrapper.dark {
    background: #444;
  }
  
  .skelton-wrapper.dark .skelton {
    background: #777;
  }
  
  .shimmer-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: loading 2.5s infinite;
  }
  
  .shimmer {
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    transform: skew(-20deg);
  }
  
  .shimmer.dark {
    background: rgba(255, 255, 255, 0.55);
  }
  
  @keyframes loading {
    0% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(150%);
    }
  }  

`;
