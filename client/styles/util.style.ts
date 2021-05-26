export const getEm = (rem, px, base = 10) => {
	const emValue = rem * base;
	return `${px / emValue}em`;
};

export const breakPoints = {
	md: "80rem",
	sm: "64rem",
};
