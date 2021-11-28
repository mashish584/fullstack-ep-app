import styled from "styled-components";
import { flexy } from "./mixin.style";

export const ThumbnailContainer = styled.div`
	${flexy}
	margin-bottom: 1rem;
`;

export const MediaThumbnail = styled.div`
	position: relative;
	width: 100px;
	height: 100px;
	margin-right: 1rem;
	img {
		border-radius: 6px;
	}

	.trash {
		position: absolute;
		top: 5px;
		right: 5px;
		width: 20px;
		height: 20px;
		border-radius: 3px;
		z-index: 99;
		background-color: ${({ theme }) => theme.colors.white};
		${flexy}
		justify-content: center;
	}
`;
