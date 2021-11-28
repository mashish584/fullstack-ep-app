import styled from "styled-components";
import { montserratBoldAlt, montserratMedium } from "./font.style";
import { flexy } from "./mixin.style";
import { breakPoints, rgba } from "./util.style";

type statsCardContainerStyleProp = {
	width?: string;
	height?: string;
	isActive?: boolean;
};

export const StatsCardContainer = styled.div<statsCardContainerStyleProp>`
	width: ${({ width }) => width};
	height: ${({ height }) => height || "190px"};
	background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.white)};
	border: 1px solid ${({ theme }) => rgba(theme.colors.darkGray, 0.6)};
	border-radius: 10px;
	${flexy};
	flex-direction: column;
	justify-content: center;
	cursor: pointer;
	transition: 200ms ease-in;

	span {
		display: block;
	}

	.count {
		${montserratBoldAlt}
		font-size:3.6rem;
		color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.black)};
	}

	.title {
		${montserratMedium}
		font-size:2.4rem;
		color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.black)};
	}

	&:hover {
		background: ${({ theme }) => theme.colors.primary};
		span {
			color: ${({ theme }) => theme.colors.white};
		}
	}

	@media screen and (max-width: ${breakPoints.sm}) {
		height: 40px;
		flex-direction: row;
		.count {
			font-size: 1.3rem;
			margin-right: 5px;
		}
		.title {
			font-size: 1.2rem;
		}
	}
`;
