import styled from "styled-components";
import { montserratBold, montserratRegular, montserratLight, montserratSemiBoldAlt, montserratRegularAlt } from "./font.style";
import { flexy } from "./mixin.style";
import { EventCardStyleProps } from "./types";

export const EventInfoContainer = styled.div`
	.timestamp {
		${montserratRegular};
		font-size: 1.3rem;
		color: ${({ theme }) => theme.colors.white};
	}

	h2 {
		${montserratBold}
		font-size: 7.2rem;
		color: ${({ theme }) => theme.colors.white};
	}

	p {
		${montserratLight}
		font-size: 2.4rem;
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
			font-size: 1.2rem;
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
		.price {
			${montserratBold}
			font-size: 2.4rem;
			color: ${({ theme }) => theme.colors.white};
		}
	}
`;
