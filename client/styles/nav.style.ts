import styled, { css } from "styled-components";
import { montserratBoldAlt, montserratRegular, montserratMedium, montserratBold } from "./font.style";
import { flexy } from "./mixin.style";
import { breakPoints, rgba } from "./util.style";

const extendMenu = css`
	width: 100%;
	top: 0;
	left: 0;
	border-radius: 0;
`;

export const NavigationContainer = styled.nav`
	width: calc(100% - 200px);
	max-height: 80px;
	position: fixed;
	padding: 2.5rem;
	z-index: 1;
	top: 1.5rem;
	left: 100px;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 10px;
	${flexy}
	justify-content: space-between;
	align-items: center;
	transition: 150ms linear;

	@media screen and (max-width: ${breakPoints.sm}) {
		width: calc(100% - 44px);
		left: 22px;
		${extendMenu}
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		${extendMenu}
	}

	&.menu_extend {
		${extendMenu}
	}

	a {
		display: inline-block;
		text-decoration: none;
	}

	.right_side {
		width: 700px;
		${flexy}
		justify-content: flex-end;
		@media screen and (max-width: ${breakPoints.sm}) {
			display: none;
		}
	}

	.logo {
		${montserratBoldAlt}
		font-size: 3.6rem;
		color: ${({ theme }) => theme.colors.blackDim};
	}

	.line {
		width: 1px;
		height: 40px;
		background-color: ${({ theme }) => theme.colors.darkGray};
		opacity: 0.64;
		margin: 0 2.5rem;
	}

	.bell {
		width: 21px;
		height: 28px;
		margin: 0 2.5rem;
		color: ${({ theme }) => theme.colors.darkGray};
	}

	.bars {
		width: 21px;
		height: 21px;
		display: none;
		@media screen and (max-width: ${breakPoints.sm}) {
			display: block;
		}
	}

	.host_event {
		width: initial;
		display: inline-block;
		max-height: 50px;
		font-size: 1.7rem;
	}

	.profile,
	.sm_profile {
		img {
			border-radius: 50px;
		}
	}

	.sm_profile {
		display: none;
		@media screen and (max-width: ${breakPoints.sm}) {
			display: block;
		}
	}

	#search {
		position: relative;
		width: 35rem;
		height: 50px;

		input {
			width: 100%;
			height: 100%;
			border-radius: 50px;
			border-color: transparent;
			background-color: ${({ theme }) => theme.colors.lightBg};
			padding: 0px 20px;
			${montserratRegular}
		}
		.search_icon {
			position: absolute;
			right: 0;
			top: 10px;
			right: 15px;
		}

		.search__results {
			position: absolute;
			top: 110%;
			width: 100%;
			height: 300px;
			overflow: auto;
			background-color: ${({ theme }) => theme.colors.white};
			box-shadow: 0 4px 10px ${({ theme }) => rgba(theme.colors.blackDim, 0.4)};
			border-radius: 12px;
			padding-top: 15px;
			h3 {
				margin: 10px;
				${montserratBold}
			}
			div {
				width: 100%;
				height: 40px;
				padding: 15px;
				border-bottom: 1px solid ${({ theme }) => theme.colors.lightBg};
				a {
					${montserratRegular}
					font-size: 1.3rem;
					color: ${({ theme }) => theme.colors.blackDim};
					text-transform: capitalize;
					.highlight {
						color: ${({ theme }) => theme.colors.primary};
						font-family: ${montserratMedium};
					}
				}
			}
			p {
				${montserratRegular}
				font-size: 1.2rem;
				/* text-align: center; */
				margin-top: 15px;
				padding-left: 10px;
			}
		}
	}

	#user_menu {
		position: absolute;
		background-color: ${({ theme }) => theme.colors.white};
		display: block;
		right: 0;
		width: 100px;
		height: 70px;
		bottom: -75px;
		border-radius: 5px;
		transform: translateY(-20px);
		transition: 100ms ease-in;
		opacity: 0;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
		&.active {
			transform: translateY(0);
			opacity: 1;
		}

		a {
			display: block;
			font-family: ${({ theme }) => theme.fonts.montserrat};
			font-size: 1.2rem;
			text-align: center;
			padding: 10px;
			color: ${({ theme }) => theme.colors.black};
			&:hover {
				background-color: ${({ theme }) => theme.colors.primary};
				color: ${({ theme }) => theme.colors.white};
			}
		}

		@media screen and (max-width: ${breakPoints.sm}) {
			display: none;
		}
	}
`;
