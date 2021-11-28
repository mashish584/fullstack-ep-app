import React from "react";

import { EventHostContainer } from "../../styles/event.style";

type HostProps = {
	src: string | null;
	username: string;
	email: string;
};

const Host: React.FC<HostProps> = (props) => {
	return (
		<EventHostContainer className="host__info">
			<div className="profile_image">
				<img src={props.src} width={"100%"} height={"100%"} />
			</div>
			<div>
				<h4>{props.username}</h4>
				<span>{props.email}</span>
			</div>
		</EventHostContainer>
	);
};

export default Host;
