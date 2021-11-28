import React from "react";
import { StatsCardContainer } from "../styles/stats.style";

type StatsCardTypes = {
	count: number;
	title: string;
	onPress?: () => void;
};

const StatsCard: React.FC<StatsCardTypes> = ({ count, title, ...props }) => {
	return (
		<StatsCardContainer>
			<span className="count">{count}</span>
			<span className="title">{title}</span>
		</StatsCardContainer>
	);
};

export default StatsCard;
