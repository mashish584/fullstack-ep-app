export const getEm = (rem, px, base = 10) => {
	const emValue = rem * base;
	return `${px / emValue}em`;
};

export const breakPoints = {
	lg: "100rem",
	md: "80rem",
	sm: "64rem",
	xs: "48rem",
	xss: "42rem",
};

export const flexWidth = (count, margin = 0.5) => `${(100 - count * (margin * 1)) / count}%`;

const hexToRgb = (hex) => {
	// http://stackoverflow.com/a/5624139
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16),
		  }
		: null;
};

export const rgba = (hex, alpha) => {
	const color = hexToRgb(hex);
	return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};
