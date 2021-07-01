import { css } from "styled-components";

export const absPostions = css<{ top?: number; bottom?: number; left?: number; right?: number }>`
	position: absolute;
	top: ${(props) => props.top || 0};
	bottom: ${(props) => props.bottom || 0};
	left: ${(props) => props.left || 0};
	right: ${(props) => props.right || 0};
`;

export const flexy = css<{ direction?: string; wrap?: boolean; alignItems?: string; justifyContent?: string }>`
	display: flex;
	flex-direction: ${(props) => props.direction || "row"};
	flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
	align-items: ${(props) => props.alignItems || "center"};
	justify-content: ${(props) => props.justifyContent};
`;
