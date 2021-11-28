import styled from "styled-components";
import { flexy } from "./mixin.style";
import { breakPoints } from "./util.style";

export const SlickPaginationContainer = styled.div`
	position: absolute;
	height: 20px;
	width: 30rem;
	right: 100px;
	bottom: 20px;
	ul li {
		width: 70px;
		&.slick-active span {
			background: ${({ theme }) => theme.colors.white};
		}
	}

	@media screen and (max-width: ${breakPoints.sm}) {
		display: none;
	}
`;

export const SlickPaging = styled.span`
	display: inline-block;
	width: 70px;
	height: 4px;
	background: ${({ theme }) => theme.colors.secondary};
	border-radius: 5px;
`;

export const SlickThumbnailContainer = styled.div`
	${flexy}
	bottom: -100px;
	li {
		width: 100px;
		height: 100px;
		margin: 0 10px;
		border-radius: 10px;
		overflow: hidden;
		transition: 300ms ease-in;
		&:first-child {
			margin-left: 0;
		}
	}
`;

export const SlickThumbnail = styled.a``;
