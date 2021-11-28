import React from "react";

import PinIcon from "../Icons/PinIcon";
import { EventInfoContainer } from "../../styles/event.style";
import { formatTimestamp } from "../../utils";

type EventInfoProps = {
	timestamp?: string;
	eventName: string;
	description?: string;
	location?: string;
	className?: string;
};

const EventInfo = (props: EventInfoProps) => {
	return (
		<EventInfoContainer className={props.className}>
			{props.timestamp && <span className="timestamp">{formatTimestamp(props.timestamp, "dddd, DD MMMM,YYYY")}</span>}
			<h2>{props.eventName}</h2>
			{props.description ? <p>{props.description?.length > 90 ? `${props.description.substring(0, 75)}...` : props.description}</p> : null}
			{props.location ? (
				<div className="location">
					<PinIcon />
					<span>{props.location}</span>
				</div>
			) : null}
		</EventInfoContainer>
	);
};

export default EventInfo;
