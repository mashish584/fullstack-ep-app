import { css } from "styled-components";

// Lato

export const lato = css`
	font-family: ${({ theme }) => theme.fonts.lato};
`;

export const latoThin = css`
	${lato}
	font-weight: ${({ theme }) => theme.fontSizes.thin};
`;

export const latoRegular = css`
	${lato}
	font-weight: ${({ theme }) => theme.fontSizes.regular};
`;

export const latoBold = css`
	${lato}
	font-weight: ${({ theme }) => theme.fontSizes.bold};
`;

export const latoBlack = css`
	${lato}
	font-weight: ${({ theme }) => theme.fontSizes.black};
`;

// WorkSans

export const workSans = css`
	font-family: ${({ theme }) => theme.fonts.workSans};
`;

export const workSansThin = css`
	${workSans}
	font-weight: ${({ theme }) => theme.fontSizes.thin};
`;

export const workSansRegular = css`
	${workSans}
	font-weight: ${({ theme }) => theme.fontSizes.regular};
`;

export const workSansMedium = css`
	${workSans}
	font-weight: ${({ theme }) => theme.fontSizes.medium};
`;

export const workSansBold = css`
	${workSans}
	font-weight: ${({ theme }) => theme.fontSizes.bold};
`;

export const workSansBlack = css`
	${workSans}
	font-weight: ${({ theme }) => theme.fontSizes.black};
`;
