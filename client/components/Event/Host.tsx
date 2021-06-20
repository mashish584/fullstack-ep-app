import React from "react";
import Image from "next/image";

import { EventHostContainer } from "../../styles/event.style";

type HostProps = {
	src: string | null;
	username: string;
	email: string;
};

const Host: React.FC<HostProps> = (props) => {
	return (
		<EventHostContainer>
			<div className="profile_image">
				<Image src={props.src} width={"100%"} height={"100%"} layout="fixed" />
			</div>
			<div>
				<h4>{props.username}</h4>
				<span>{props.email}</span>
			</div>
		</EventHostContainer>
	);
};

export default Host;
