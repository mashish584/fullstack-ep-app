import styled from "styled-components";
import { montserratAlt, montserratBold, montserratBoldAlt, montserratRegular, montserratSemiBoldAlt } from "./font.style";
import { flexy } from "./mixin.style";
import { breakPoints, flexWidth } from "./util.style";

export const DetailPageContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.lightBg};
	padding: 0rem 10rem 5rem;
	overflow-x: hidden;

	@media screen and (max-width: ${breakPoints.sm}) {
		padding: 0rem 2.2rem;
	}

	button {
		width: 210px;
		height: 57px;
	}

	#head {
		margin-top: 17rem;
		margin-bottom: 15rem;
		#slideContainer {
			@media screen and (max-width: ${breakPoints.xs}) {
				height: 250px !important;
			}
		}
		.slide__item {
			position: relative;
			width: 100%;
			height: 550px;
			margin-top: 3em;
			border-radius: 2.2rem;
			overflow: hidden;
			margin-bottom: 2rem;

			@media screen and (max-width: ${breakPoints.xs}) {
				height: 200px;
			}
		}

		@media screen and (max-width: ${breakPoints.xs}) {
			margin-bottom: 15rem;
		}
	}

	#content {
		margin-top: 18rem;
		.event__info {
			${flexy}
			flex-direction: column;
			align-items: flex-start;
			span {
				${montserratRegular}
				color:${({ theme }) => theme.colors.blackDim};
				font-size: 1.8rem;
				${flexy}
				&:first-of-type {
					margin-bottom: 20px;
				}

				svg {
					margin-right: 2rem;
				}

				path {
					fill: ${({ theme }) => theme.colors.primary};
				}

				@media screen and (max-width: ${breakPoints.sm}) {
					svg {
						width: 20px !important;
						height: 30px !important;
					}
					font-size: 1.4rem;
					width: 90%;
				}
			}
		}

		h2 {
			font-size: 7.2rem;
			${montserratBoldAlt}
			color:${({ theme }) => theme.colors.black};
			margin-bottom: 2rem;
			@media screen and (max-width: ${breakPoints.sm}) {
				font-size: 5rem;
			}
		}

		p {
			${montserratRegular}
			font-size: 2rem;
			color: ${({ theme }) => theme.colors.blackDim};
			margin-top: 3rem;
			width: 80%;
			@media screen and (max-width: ${breakPoints.sm}) {
				width: 90%;
				font-size: 1.5rem;
			}
		}

		h3 {
			font-size: 2.4rem;
			margin: 6.2rem 0 2rem;
			${montserratBold}
			color:${({ theme }) => theme.colors.black};
		}

		.host__info {
			h4,
			span {
				font-size: 2.4rem;
				color: ${({ theme }) => theme.colors.black};
			}

			span:last-of-type {
				font-size: 1.8rem;
			}

			.profile_image {
				width: 80px;
				height: 80px;
			}
		}

		.price_info {
			${flexy}
			height: 12.4rem;
			background: ${({ theme }) => theme.colors.white};
			padding: 2.5rem 3.6rem;
			margin-top: 9.4rem;
			border-radius: 10px;
			border: 1px solid ${({ theme }) => theme.colors.darkGray};
			p {
				${montserratRegular}
				font-size: 1.8rem;
				color: ${({ theme }) => theme.colors.blackDim};
				margin-top: 0;

				@media screen and (max-width: ${breakPoints.xs}) {
					font-size: 1.4rem;
					margin-right: 1rem;
				}
				span {
					${montserratBold}
					font-size: 3.8rem;
					color: ${({ theme }) => theme.colors.primary};
					display: block;
					@media screen and (max-width: ${breakPoints.xs}) {
						font-size: 3rem;
					}
				}
			}

			@media screen and (max-width: ${breakPoints.sm}) {
				padding: 2rem;
				button {
					width: 300px;
					.button__content {
						font-size: 1.4rem;
					}
				}
			}
		}
	}

	#attendees {
		margin-top: 9.3rem;
		> div {
			${flexy}
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 2.5rem;
		}

		button {
			margin: 0 auto;
			display: block;
		}

		@media screen and (max-width: ${breakPoints.sm}) {
			margin-top: 5rem;
		}
	}
`;

export const AttendeeCardContainer = styled.div`
	${flexy}
	justify-content: space-evenly;
	flex-basis: ${flexWidth(3, 1.5)};
	height: 115px;
	margin: 2.5rem 0 0;
	margin-left: 0;
	background-color: ${({ theme }) => theme.colors.white};
	align-items: center;
	border-radius: 10px;

	@media screen and (max-width: ${breakPoints.sm}) {
		height: 90px;
	}

	@media screen and (max-width: ${breakPoints.xs}) {
		flex-basis: ${flexWidth(2, 1.5)};
		height: 60px;
		margin: 1.5rem 0 0;
	}

	.profile_image {
		width: 80px;
		height: 80px;
		border-radius: 50px;
		overflow: hidden;
		@media screen and (max-width: ${breakPoints.sm}) {
			width: 60px;
			height: 60px;
		}
		@media screen and (max-width: ${breakPoints.xs}) {
			width: 30px;
			height: 30px;
		}
	}
	.info {
		h4 {
			${montserratSemiBoldAlt}
			font-size: 2.4rem;
			color: ${({ theme }) => theme.colors.black};
			@media screen and (max-width: ${breakPoints.sm}) {
				font-size: 2rem;
			}

			@media screen and (max-width: ${breakPoints.xs}) {
				font-size: 1.3rem;
			}
		}
		span {
			${montserratAlt}
			font-size: 1.8rem;
			color: ${({ theme }) => theme.colors.blackDim};
			@media screen and (max-width: ${breakPoints.sm}) {
				font-size: 1.5rem;
			}

			@media screen and (max-width: ${breakPoints.xs}) {
				font-size: 1rem;
			}
		}
	}
`;
