import { css } from "styled-components";

// Montserrat

export const montserrat = css`
	font-family: ${({ theme }) => theme.fonts.montserrat};
`;

export const montserratLight = css`
	${montserrat}
	font-weight: ${({ theme }) => theme.fontSizes.light};
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

// Montserrat Alt
export const montserratAlt = css`
	font-family: ${({ theme }) => theme.fonts.montserrat_alt};
`;

export const montserratThinAlt = css`
	${montserratAlt}
	font-weight: ${({ theme }) => theme.fontSizes.thin};
`;

export const montserratRegularAlt = css`
	${montserratAlt}
	font-weight: ${({ theme }) => theme.fontSizes.regular};
`;

export const montserratMediumAlt = css`
	${montserratAlt}
	font-weight: ${({ theme }) => theme.fontSizes.medium};
`;

export const montserratSemiBoldAlt = css`
	${montserratAlt}
	font-weight: ${({ theme }) => theme.fontSizes.semiBold};
`;

export const montserratBoldAlt = css`
	${montserratAlt}
	font-weight: ${({ theme }) => theme.fontSizes.bold};
`;

export const montserratBlackAlt = css`
	${montserratAlt}
	font-weight: ${({ theme }) => theme.fontSizes.black};
`;
