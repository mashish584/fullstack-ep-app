import styled from "styled-components";
import { montserratBoldAlt } from "./font.style";
import { flexy } from "./mixin.style";

export const NavigationContainer = styled.nav`
	width: 80%;
	left: 10%;
	max-height: 80px;
	position: fixed;
	padding: 2.5rem;
	z-index: 1;
	top: 2.5rem;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 10px;
	${flexy}
	justify-content: space-between;
	align-items: center;
	transition: 150ms linear;

	&.menu_extend {
		width: 100%;
		top: 0;
		left: 0;
		border-radius: 0;
	}

	a {
		display: inline-block;
		text-decoration: none;
	}

	.right_side {
		width: 500px;
		${flexy}
		justify-content: flex-end;
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

	.host_event {
		width: initial;
		display: inline-block;
		max-height: 50px;
		font-size: 1.7rem;
	}

	.profile {
		img {
			border-radius: 50px;
		}
	}
`;
