import styled from "styled-components";
import { montserratBold, montserratMedium, montserratSemiBold } from "./font.style";
import { flexy } from "./mixin.style";

export const HomePageContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.lightBg};
	padding-bottom: 5rem;
	overflow-x: hidden;
	section {
		padding: 0 100px;
		margin: 7.5rem 0;
	}

	#upcoming__events {
		padding: 0;

		h3 {
			margin-left: 100px;
		}

		.slick-track {
			display: flex;
		}

		.slick-slide:first-child {
			padding-left: 100px;
		}

		.slick-slide {
			padding: 0 22px;
		}
	}
`;

export const EventSlide = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	padding: 0 100px;

	.slide__container {
		${flexy}
		height: 100%;
		position: relative;
		z-index: 1;
		&_content {
			width: 60rem;
		}
	}
`;

export const SectionHeadContainer = styled.div`
	${flexy}
	margin-bottom: 6.2rem;
	justify-content: space-between;
	padding-right: 100px;
`;

export const SubHeading = styled.span`
	${montserratSemiBold}
	font-size: 1.8rem;
	color: ${({ theme }) => theme.colors.white};
	display: inline-block;
	margin: 2.4rem 0 1.8rem;
`;

export const SectionHeading = styled.h3`
	${montserratBold}
	font-size: 4rem;
	color: ${({ theme }) => theme.colors.blackDim};
	position: relative;

	&:after {
		position: absolute;
		content: "";
		width: 100px;
		height: 12px;
		background: ${({ theme }) => theme.colors.primary};
		bottom: -15px;
		left: 0;
	}
`;

export const EventCategoryContainer = styled.div`
	margin-bottom: 5.6rem;
	button {
		${montserratMedium}
		font-size: 1.8rem;
		color: ${({ theme }) => theme.colors.darkGray};
		margin-right: 3.4rem;
		&.active {
			color: ${({ theme }) => theme.colors.secondary};
		}
	}
`;

export const EventListContainer = styled.div`
	${flexy}
	justify-content: flex-start;
	flex-wrap: wrap;
	max-width: 1440px;
	> div {
		width: 100%;
	}
`;
