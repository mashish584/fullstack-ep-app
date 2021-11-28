import styled, { css } from "styled-components";
import { montserratMediumAlt, montserratRegular, montserratSemiBold, montserratSemiBoldAlt } from "./font.style";
import { flexy } from "./mixin.style";
import { buttonStyleProps } from "./types";
import { getEm, rgba } from "./util.style";

const inputStyled = css`
	width: 100%;
	min-height: 70px;
	max-height: 70px;
	${montserratMediumAlt}
	font-size: 1.8rem;
	padding-left: ${getEm(1.8, 15)};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 4px;
	border-width: 0;
	box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.02);
	border: 1px solid ${({ theme }) => rgba(theme.colors.darkGray, 0.5)};
`;

export const InputFlexContainer = styled.div<{ mb?: string }>`
	${flexy}
	margin-bottom: ${({ mb }) => mb};
	align-items: flex-start;
`;

export const InputContainer = styled.div<{ width?: number | string; mt?: number; mb?: number; pt?: number; pb?: number; mr?: number }>`
	position: relative;
	font-size: 1.8rem;
	width: ${({ width }) => width || "100%"};
	${({ mb }) => {
		return mb ? { marginBottom: mb } : null;
	}}
	${({ mt }) => {
		return mt ? { marginBottom: mt } : null;
	}}
	${({ mr }) => {
		return mr ? { marginRight: mr } : null;
	}}
	${({ pt }) => {
		return pt ? { marginBottom: pt } : null;
	}}
	${({ pb }) => {
		return pb ? { marginBottom: pb } : null;
	}}

	label {
		${montserratMediumAlt}
		display: inline-block;
		font-size: 1.5rem;
		margin-bottom: ${getEm(1.5, 13)};
	}

	.stripe_input {
		${inputStyled};
		min-height: initial;
		max-height: initial;
	}

	#checkboxContainer {
		label {
			margin-right: 1rem;
			${montserratRegular}
			input[type="checkbox"] {
				margin-right: 1rem;
			}
		}
	}

	#upload {
		${flexy}
		background-color: ${({ theme }) => theme.colors.white};
		padding: 0 ${getEm(1.8, 15)};
		height: 70px;
		box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.02);
		border-radius: 4px;
		p {
			${montserratRegular}
			font-size: 1rem;
			color: ${({ theme }) => theme.colors.blackDim};
		}
	}
`;

export const TextInput = styled.input`
	${inputStyled}
`;

export const TextArea = styled.textarea`
	${inputStyled}
	resize: none;
	min-height: 150px;
	padding: 15px;
`;

export const Button = styled.button<buttonStyleProps>`
	width: ${({ width }) => width || "100%"};
	height: ${({ height }) => height || "70px"};
	background-color: ${({ theme, bg }) => bg || theme.colors.primary};
	${montserratSemiBoldAlt}
	font-size: 2.4rem;
	padding: 0 2.2rem;
	border: none;
	border-radius: ${({ radius }) => radius || "10px"};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	margin-top: ${({ mt }) => mt};

	.button__content {
		${flexy};
		justify-content: ${({ showArrow }) => (showArrow ? "space-between" : "space-evenly")};
		${montserratSemiBold}
		font-size: 1.8rem;
	}
`;
