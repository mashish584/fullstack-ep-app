import React from "react";

import { EventInfoContainer } from "../../styles/event.style";

type EventInfoProps = {
	timestamp: string;
	eventName: string;
	description?: string;
	className?: string;
};

const EventInfo = (props: EventInfoProps) => {
	return (
		<EventInfoContainer className={props.className}>
			<span className="timestamp">Monday, 14 June,2021</span>
			<h2>REUNION</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet dignissim semper tellus...</p>
		</EventInfoContainer>
	);
};

export default EventInfo;
