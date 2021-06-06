import styled from "styled-components";
import { absPostions, flexy } from "./mixin.style";
import { breakPoints } from "./util.style";

export const Container = styled.div<{ bg: string }>`
	background: ${(props) => props.bg};
	height: 100%;
	padding: 0 100px;
	@media screen and (max-width: ${breakPoints.sm}) {
		padding: 0 22px;
	}
`;

export const BackgroundImage = styled.div<{ src: string; resizeMode?: string }>`
	background: url(${(props) => props.src}) no-repeat center;
	background-size: ${(props) => props.resizeMode || "cover"};
	${absPostions}
`;

export const Layer = styled.div<{ top?: number; left?: number; bottom?: number; right?: number; bg?: string; opacity?: number }>`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: ${(props) => props.bg || props.theme.colors.secondary};
	opacity: ${(props) => props.opacity || 1};
`;

export const Loader = styled.div`
	${flexy}
	position: relative;
	width: 80px;
	height: 40px;
	margin: 0 auto;
	div {
		position: absolute;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: #fff;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
		&:nth-child(1) {
			left: 8px;
			animation: lds-ellipsis1 0.6s infinite;
		}
		&:nth-child(2) {
			left: 8px;
			animation: lds-ellipsis2 0.6s infinite;
		}
		&:nth-child(3) {
			left: 32px;
			animation: lds-ellipsis2 0.6s infinite;
		}
		&:nth-child(4) {
			left: 56px;
			animation: lds-ellipsis3 0.6s infinite;
		}
	}

	@keyframes lds-ellipsis1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes lds-ellipsis3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(24px, 0);
		}
	}
`;
