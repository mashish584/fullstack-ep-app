import styled from "styled-components";
import { montserratBold, montserratRegular } from "./font.style";
import { flexy } from "./mixin.style";
import { breakPoints, getEm } from "./util.style";

export const Container = styled.div`
	display: flex;
	min-height: 100%;
	justify-content: center;
	.form__section {
		${flexy}
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		.auth__info {
			position: relative;
			z-index: 2;
			margin-bottom: 4.4em;
			h3 {
				${montserratBold}
				font-size: 6.4rem;
				margin-bottom: ${getEm(6.4, 20)};
			}
			p {
				${montserratRegular}
				font-size: 2rem;
				color: ${({ theme }) => theme.colors.blackDim};
				line-height: 2.8rem;
				a {
					color: ${({ theme }) => theme.colors.primary};
				}
			}
		}
		.forgot__link {
			${montserratRegular}
			font-size: 1.4rem;
			color: ${({ theme }) => theme.colors.blackDim};
			opacity: 0.9;
			margin-bottom: 21px;
			float: right;
			margin-right: 1px;
			text-decoration: none;
		}
	}
	@media screen and (max-width: ${breakPoints.lg}) {
		.form__section {
			.auth__info {
				margin-bottom: 3.4em;
				h3 {
					font-size: 4rem;
					margin-bottom: ${getEm(4, 20)};
				}
				p {
					font-size: 1.6rem;
				}
			}
		}
	}

	@media screen and (max-width: ${breakPoints.sm}) {
		flex-direction: column;
	}
`;

export const Section = styled.div<{ flex?: number; direction?: string }>`
	position: relative;
	flex: ${(props) => props.flex || 0.5};
	min-height: 100%;

	@media screen and (max-width: ${breakPoints.sm}) {
		flex: 1;
	}
`;

export const AuthFormContainer = styled.form`
	position: relative;
	z-index: 2;
	width: 48em;

	@media screen and (max-width: ${breakPoints.lg}) {
		width: 40rem;
	}

	@media screen and (max-width: ${breakPoints.sm}) {
		width: 100%;
	}
`;
