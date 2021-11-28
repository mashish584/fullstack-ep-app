import React from "react";

type ShimmerProps = {
	theme?: "light" | "dark";
};

const Shimmer: React.FC<ShimmerProps> = ({ theme }) => {
	const themeClass = theme || "light";
	return (
		<div className={`shimmer-wrapper ${themeClass}`}>
			<div className="shimmer"></div>
		</div>
	);
};

export default Shimmer;
