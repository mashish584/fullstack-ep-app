import { css } from "styled-components";

// Montserrat

export const montserrat = css`
	font-family: ${({ theme }) => theme.fonts.montserrat};
`;

export const montserratThin = css`
	${montserrat}
	font-weight: ${({ theme }) => theme.fontSizes.thin};
`;

export const montserratRegular = css`
	${montserrat}
	font-weight: ${({ theme }) => theme.fontSizes.regular};
`;

export const montserratMedium = css`
	${montserrat}
	font-weight: ${({ theme }) => theme.fontSizes.medium};
`;

export const montserratSemiBold = css`
	${montserrat}
	font-weight: ${({ theme }) => theme.fontSizes.semiBold};
`;

export const montserratBold = css`
	${montserrat}
	font-weight: ${({ theme }) => theme.fontSizes.bold};
`;

export const montserratBlack = css`
	${montserrat}
	font-weight: ${({ theme }) => theme.fontSizes.black};
`;
