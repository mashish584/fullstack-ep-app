import React from "react";

type HeartIconProps = {
	width?: number;
	height?: number;
	color?: string;
	isFilled: boolean;
};

const HeartIcon = ({ width = 22, height = 20, color = "white", isFilled }: HeartIconProps) => {
	return (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill={"none"} xmlns="http://www.w3.org/2000/svg">
			{isFilled ? (
				<path
					d="M11 20L9.405 18.5613C3.74 13.4714 0 10.1035 0 5.99455C0 2.6267 2.662 0 6.05 0C7.964 0 9.801 0.882834 11 2.26703C12.199 0.882834 14.036 0 15.95 0C19.338 0 22 2.6267 22 5.99455C22 10.1035 18.26 13.4714 12.595 18.5613L11 20Z"
					fill={color}
				/>
			) : (
				<path
					d="M11.11 16.9482L11 17.0572L10.879 16.9482C5.654 12.2507 2.2 9.14441 2.2 5.99455C2.2 3.81471 3.85 2.17984 6.05 2.17984C7.744 2.17984 9.394 3.26975 9.977 4.75204H12.023C12.606 3.26975 14.256 2.17984 15.95 2.17984C18.15 2.17984 19.8 3.81471 19.8 5.99455C19.8 9.14441 16.346 12.2507 11.11 16.9482ZM15.95 0C14.036 0 12.199 0.882834 11 2.26703C9.801 0.882834 7.964 0 6.05 0C2.662 0 0 2.6267 0 5.99455C0 10.1035 3.74 13.4714 9.405 18.5613L11 20L12.595 18.5613C18.26 13.4714 22 10.1035 22 5.99455C22 2.6267 19.338 0 15.95 0Z"
					fill={color}
				/>
			)}
		</svg>
	);
};

export default HeartIcon;
