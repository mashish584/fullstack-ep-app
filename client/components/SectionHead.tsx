import React from "react";
import { SectionHeadContainer, SectionHeading } from "../styles/home.style";

type SectionHeadProps = {
	title: string;
	actionComponent?: React.ReactNode;
};

const SectionHead: React.FC<SectionHeadProps> = ({ title, actionComponent }) => {
	return (
		<SectionHeadContainer>
			<SectionHeading>{title}</SectionHeading>
			{actionComponent}
		</SectionHeadContainer>
	);
};

export default SectionHead;
