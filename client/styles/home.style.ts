import styled from "styled-components";
import { montserratBold, montserratMedium, montserratSemiBold } from "./font.style";
import { flexy } from "./mixin.style";
import { breakPoints } from "./util.style";

export const HomePageContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.lightBg};
	padding-bottom: 5rem;
	overflow-x: hidden;
	section {
		padding: 0 100px;
		margin: 7.5rem 0;
		@media screen and (max-width: ${breakPoints.sm}) {
			padding: 0 22px;
		}

		@media screen and (min-width: ${breakPoints.lg}) {
			padding: 0;
		}
	}

	#upcoming__events {
		padding: 0;

		h3 {
			margin-left: 100px;
			@media screen and (max-width: ${breakPoints.sm}) {
				margin-left: 22px;
			}
			@media screen and (min-width: ${breakPoints.lg}) {
				margin-left: 0;
			}
		}

		.slick-track {
			display: flex;
		}

		.slick-slide:first-child {
			padding-left: 100px;
			@media screen and (max-width: ${breakPoints.sm}) {
				padding-left: 22px;
			}

			@media screen and (min-width: ${breakPoints.lg}) {
				padding-left: 0;
			}
		}
	}
`;

export const EventSlide = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	padding: 0 100px 70px;
	max-height: 630px;
	.slide__container {
		${flexy}
		align-items: flex-end;
		height: 100%;
		position: relative;
		z-index: 1;
		&_content {
			width: 60rem;
		}
	}

	@media screen and (max-width: ${breakPoints.sm}) {
		padding: 44px 22px 0;
		.slide__container {
			align-items: center;
		}
		.event__info_slide {
			h2 {
				font-size: 3rem;
			}
			p {
				font-size: 1.4rem;
			}
		}

		.section_heading {
			font-size: 1.5rem;
		}

		.host__info {
			h4 {
				font-size: 1.5rem;
			}
			span {
				font-size: 1rem;
			}
		}
	}
`;

export const SectionHeadContainer = styled.div`
	${flexy}
	margin-bottom: 6.2rem;
	justify-content: space-between;
	padding-right: 100px;
	@media screen and (max-width: ${breakPoints.sm}) {
		padding-right: 22px;
	}
	@media screen and (min-width: ${breakPoints.lg}) {
		padding-right: 0px;
	}
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

	@media screen and (max-width: ${breakPoints.sm}) {
		font-size: 3rem;
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

		@media screen and (max-width: ${breakPoints.sm}) {
			margin-bottom: 0.7rem;
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
