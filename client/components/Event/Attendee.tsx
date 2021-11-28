import React from "react";

import { AttendeeCardContainer } from "../../styles/event-detail.style";

type AttendeeProps = {
	src: string | null;
	username: string;
	email: string;
};

const Host: React.FC<AttendeeProps> = (props) => {
	return (
		<AttendeeCardContainer className="attendee__info">
			<div className="profile_image">
				<img src={props.src} width={"100%"} height={"100%"} />
			</div>
			<div className="info">
				<h4>{props.username}</h4>
				<span>{props.email}</span>
			</div>
		</AttendeeCardContainer>
	);
};

export default Host;
