import styled from "styled-components";
import { workSansSemibold, workSansMedium, workSansThin } from "./font.style";
import { getEm } from "./util.style";

export const InputContainer = styled.div<{ width?: number | string; mt?: number; mb?: number; pt?: number; pb?: number }>`
	position: relative;
	font-size: 1.8rem;
	width: ${({ width }) => width || "100%"};
	${({ mb }) => {
		return mb ? { marginBottom: mb } : null;
	}}
	${({ mt }) => {
		return mt ? { marginBottom: mt } : null;
	}}
	${({ pt }) => {
		return pt ? { marginBottom: pt } : null;
	}}
	${({ pb }) => {
		return pb ? { marginBottom: pb } : null;
	}}

	label {
		position: absolute;
		${workSansThin}
		font-size: 1.5rem;
		left: ${getEm(1.5, 15)};
		top: ${getEm(1.5, 10)};
	}
`;

export const TextInput = styled.input`
	width: 100%;
	min-height: 70px;
	${workSansMedium}
	font-size: 1.8rem;
	padding-left: ${getEm(1.8, 15)};
	padding-top: ${getEm(1.8, 10)};
	background-color: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.darkGray};
	border-radius: 5px;
`;

export const Button = styled.button<{ bg?: string; radius?: number; width?: number | string; height?: number }>`
	width: 100%;
	min-height: ${({ height }) => height || "70px"};
	background-color: ${({ theme, bg }) => bg || theme.colors.primary};
	${workSansSemibold}
	font-size: 2.4rem;
	padding: ${getEm(2.4, 15)};
	border: none;
	border-radius: ${({ radius }) => radius || "5px"};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
`;
