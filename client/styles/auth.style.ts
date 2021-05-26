import styled from "styled-components";
import { workSansBold, workSansRegular, latoSemiBold, workSansMedium } from "./font.style";
import { absPostions, flexy } from "./mixin.style";
import { breakPoints, getEm } from "./util.style";

export const Container = styled.div`
	display: flex;
	min-height: 100%;
	.form__section {
		${flexy}
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		&:after {
			position: absolute;
			content: "";
			left: -7.5rem;
			top: 0;
			bottom: 0;
			width: 15rem;
			background-color: ${({ theme }) => theme.colors.background};
			transform: skew(-8deg);
		}
		.auth__info {
			position: relative;
			z-index: 2;
			margin-bottom: 3.4em;
			h3 {
				${latoSemiBold}
				font-size: 3.2rem;
			}
			p {
				${workSansRegular}
				font-size: 1.4rem;
				margin-top: ${getEm(1.4, 7)};
				color: ${({ theme }) => theme.colors.blackDim};
				line-height: 1.8rem;
				width: 80%;
				a {
					color: ${({ theme }) => theme.colors.primary};
				}
			}
		}
		.forgot__link {
			${workSansMedium}
			font-size: 1.8rem;
			color: ${({ theme }) => theme.colors.secondary};
			opacity: 0.9;
			margin-bottom: 21px;
			float: right;
			margin-right: 1px;
		}
	}
	@media screen and (max-width: ${breakPoints.sm}) {
		flex-direction: column;
		.form__section {
			align-items: center;
			padding-top: 3rem;
			padding-bottom: 10rem;
			&:after {
				display: none;
			}
		}
	}
`;

export const Section = styled.div<{ flex?: number; bg?: string; direction?: string }>`
	position: relative;
	flex: ${(props) => props.flex || 0.5};
	background-color: ${(props) => props.bg || props.theme.colors.background};
	min-height: 100%;
	#content {
		${flexy}
		${absPostions}
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding-left: ${({ theme }) => theme.spacing.authScreenHS};
		h2 {
			${workSansBold}
			font-size: 7.2rem;
			color: ${({ theme }) => theme.colors.primary};
			&:last-of-type {
				font-size: 6.4rem;
				color: ${({ theme }) => theme.colors.white};
			}
		}
		p {
			${workSansRegular}
			font-size: 2.4rem;
			color: ${({ theme }) => theme.colors.white};
			hyphens: auto;
			margin-top: ${getEm(2.4, 12)};
			line-height: 2.9rem;
		}
	}

	@media screen and (max-width: ${breakPoints.md}) {
		#content {
			padding-left: 5rem;
			h2 {
				font-size: 6rem;
				&:last-of-type {
					font-size: 5rem;
				}
			}
			p {
				font-size: 2.5rem;
			}
		}
	}

	@media screen and (max-width: ${breakPoints.sm}) {
		min-height: 30rem;
		#content {
			padding-left: 0;
			h2,
			p {
				width: 80%;
				margin: 0 auto;
			}

			h2 {
				font-size: 4.5rem;
				&:last-of-type {
					font-size: 3.5rem;
				}
			}
			p {
				font-size: 1.5rem;
				line-height: 1.7rem;
			}
		}
	}
`;

export const AuthFormContainer = styled.div`
	position: relative;
	z-index: 2;
	width: 60%;
	margin-left: 10rem;

	@media screen and (max-width: ${breakPoints.md}) {
		width: 80%;
		margin-left: 2.5rem;
	}

	@media screen and (max-width: ${breakPoints.sm}) {
		margin-left: 0;
	}
`;
