import styled from "styled-components";
import {
	montserratBold,
	montserratRegular,
	montserratLight,
	montserratSemiBoldAlt,
	montserratRegularAlt,
	montserratBoldAlt,
} from "./font.style";
import { flexy } from "./mixin.style";
import { EventCardStyleProps } from "./types";
import { breakPoints, flexWidth } from "./util.style";

export const EventInfoContainer = styled.div`
	width: 80%;
	.timestamp {
		${montserratRegular};
		font-size: 1.3rem;
		color: ${({ theme }) => theme.colors.white};
	}

	.location {
		${montserratLight}
		color: ${({ theme }) => theme.colors.white};
		margin-top: 1.2rem;
		font-size: 1.1rem;
		${flexy}
		align-items: flex-start;
		span {
			margin-left: 10px;
		}
	}

	h2 {
		${montserratBold}
		font-size: 4.2rem;
		color: ${({ theme }) => theme.colors.white};
	}

	p {
		${montserratLight}
		font-size: 2rem;
		color: ${({ theme }) => theme.colors.white};
	}

	&.event__dark_card {
		.timestamp {
			font-size: 1rem;
		}
		h2 {
			font-size: 2.4rem;
		}
		p {
			${montserratRegular}
			font-size: 1.2rem;
		}
	}

	&.event__light_card {
		h2 {
			font-size: 2.4rem;
			color: ${({ theme }) => theme.colors.secondary};
			margin-bottom: 5px;
		}
		p {
			${montserratRegular}
		}
		.location {
			width: 70%;
			color: ${({ theme }) => theme.colors.secondary};
			${flexy}
			align-items: flex-start;
			span {
				opacity: 0.83;
				margin-left: 10px;
			}
		}
	}
`;

export const EventHostContainer = styled.div`
	${flexy}
	.profile_image {
		border-radius: 50%;
		width: 42px;
		height: 42px;
		overflow: hidden;
	}

	div {
		color: ${({ theme }) => theme.colors.white};
		margin-right: 1.3rem;
		h4 {
			${montserratSemiBoldAlt}
			font-size: 1.8rem;
		}
		span {
			${montserratRegularAlt}
			font-size: 1.2rem;
		}
	}
`;

export const EventDarkCard = styled.div<EventCardStyleProps>`
	position: relative;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	padding: 30px 22px 20px;
	border-radius: 15px;
	margin-right: 22px;
	border: 1px solid #a9a9a9;
	overflow: hidden;
	${flexy}
	flex-direction: column;
	justify-content: space-between;
	.heart_icon {
		position: relative;
		width: 30px;
		height: 30px;
		background: transparent;
		border-width: 0;
		align-self: flex-end;
	}

	.section_heading {
		font-size: 1.4rem;
	}

	.card__footer {
		${flexy}
		justify-content: space-between;
	}
`;

export const Price = styled.span`
	${montserratBold}
	font-size: 2.4rem;
	color: ${({ theme }) => theme.colors.white};
`;

export const EventLightCard = styled.div`
	flex-basis: ${flexWidth(3, 1.5)};
	min-height: 400px;
	margin: 1.5%;
	margin-left: 0;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.white};
	overflow: hidden;
	cursor: pointer;
	.top_content {
		position: relative;
		height: 240px;
		padding: 22px;
		${flexy}
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		.heart_icon {
			position: relative;
			align-self: flex-start;
			margin-left: auto;
		}
		.host__info {
			position: relative;
		}
	}

	.bottom_content {
		position: relative;
		padding: 22px;
		.details {
			${flexy}
			justify-content: space-between;
			margin-bottom: 1.9rem;
		}
		.ts_card {
			${flexy}
			flex-direction: column;
			justify-content: center;
			width: 51px;
			height: 67px;
			border-radius: 5px;
			border: ${({ theme }) => `1px solid ${theme.colors.darkGray}`};
			span {
				${montserratBold}
				font-size: 2.4rem;
				opacity: 0.83;
				&:last-of-type {
					font-size: 1.4rem;
				}
			}
		}
		.footer {
			${flexy}
			justify-content: space-between;
			.price {
				color: ${({ theme }) => theme.colors.secondary};
			}
		}
	}

	@media screen and (max-width: ${breakPoints.xs}) {
		flex-basis: ${flexWidth(2, 1.5)};
		margin: 1.5%;
		margin-left: 0;
	}

	@media screen and (max-width: ${breakPoints.xss}) {
		flex-basis: ${flexWidth(1, 0)};
		margin: 1.5% 0;
	}
`;

export const AttendeesContainer = styled.div`
	${flexy}
	img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 2px solid ${({ theme }) => theme.colors.white};
		margin-left: -15px;
		&:first-of-type {
			margin-left: 0;
		}
	}
	a {
		${montserratBoldAlt}
		font-size: 1.1rem;
		color: ${({ theme }) => theme.colors.secondary};
		text-decoration: none;
	}
`;
