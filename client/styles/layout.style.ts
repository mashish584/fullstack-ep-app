import styled from "styled-components";
import { absPostions } from "./mixin.style";

export const Container = styled.div<{ bg: string }>`
	background-color: ${(props) => props.bg};
	height: 100%;
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
