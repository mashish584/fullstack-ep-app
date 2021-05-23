import styled from "styled-components";
import { workSansBold, workSansRegular } from "./font.style";
import { absPostions, flexy } from "./mixin.style";
import { getEm } from "./util.style";

export const Container = styled.div`
	display: flex;
	.form-section:after {
		position: absolute;
		content: "";
		left: -100px;
		top: 0;
		bottom: 0;
		width: 200px;
		background-color: white;
		transform: skew(-10deg);
	}
`;

export const Section = styled.div<{ flex?: number; bg?: string; direction?: string }>`
	position: relative;
	flex: ${(props) => props.flex || 0.5};
	background-color: ${(props) => props.bg || props.theme.colors.background};
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
`;

export const AuthFormContainer = styled.div``;
