import styled from "styled-components";
import { montserratMedium, montserratSemiBold } from "./font.style";
import { buttonStyleProps } from "./types";
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
		${montserratMedium}
		display: inline-block;
		font-size: 1.5rem;
		margin-bottom: ${getEm(1.5, 13)};
	}
`;

export const TextInput = styled.input`
	width: 100%;
	min-height: 70px;
	${montserratMedium}
	font-size: 1.8rem;
	padding-left: ${getEm(1.8, 15)};
	padding-top: ${getEm(1.8, 10)};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 4px;
	border-width: 0;
	box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.02);
`;

export const Button = styled.button<buttonStyleProps>`
	width: 100%;
	height: ${({ height }) => height || "70px"};
	background-color: ${({ theme, bg }) => bg || theme.colors.primary};
	${montserratSemiBold}
	font-size: 2.4rem;
	padding: ${getEm(2.4, 15)};
	border: none;
	border-radius: ${({ radius }) => radius || "10px"};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
`;
