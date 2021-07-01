export const getEm = (rem, px, base = 10) => {
	const emValue = rem * base;
	return `${px / emValue}em`;
};

export const breakPoints = {
	lg: "90rem",
	md: "80rem",
	sm: "64rem",
};

export const flexWidth = (count, margin = 0.5) => `${(100 - count * (margin * 1)) / count}%`;
