import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { EventInfoContainer } from "../../styles/event.style";
import PinIcon from "../Icons/PinIcon";

type EventInfoProps = {
	timestamp: string;
	eventName: string;
	description?: string;
	location?: string;
	className?: string;
};

const EventInfo = (props: EventInfoProps) => {
	return (
		<EventInfoContainer className={props.className}>
			<span className="timestamp"></span>
			<h2>{props.eventName}</h2>
			{props.description ? <p>{props.description}</p> : null}
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
