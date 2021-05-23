export const getEm = (rem, px, base = 10) => {
	const emValue = rem * base;
	return `${px / emValue}em`;
};
