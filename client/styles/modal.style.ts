import styled from "styled-components";
import { flexy } from "./mixin.style";

export const ModalLayer = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100%;
	background: rgba(0, 0, 0, 0.9);
`;

export const ModalWrapper = styled.div<{ visible: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: ${({ visible }) => (visible ? "flex" : "none")};
	align-items: center;
	justify-content: center;
	z-index: 2;

	&.profile_modal {
		width: 80%;
		left: 10%;
		top: 50%;
		height: 200px;
		margin-bottom: 5px;
		.modal {
			${flexy}
			transform: translateY(-100px);
			align-items: center;
			justify-content: center;
		}
	}
`;

export const ModalCard = styled.div<{ width?: string }>`
	position: relative;
	background: white;
	width: ${({ width }) => width || "300px"};
	max-width: ${({ width }) => width || "300px"};
	height: 80%;
	padding: 22px;
	box-sizing: border-box;
	z-index: 10;
	overflow: scroll;
`;

export const CloseButton = styled.button`
	position: absolute;
	right: 25px;
	top: 25px;
	z-index: 3;
`;
