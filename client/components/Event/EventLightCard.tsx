import React from "react";
import Link from "next/link";

import HeartIcon from "../Icons/HeartIcon";

import { AttendeesContainer, EventLightCard as CardContainer, Price } from "../../styles/event.style";
import { BackgroundImage, Layer } from "../../styles/layout.style";
import { eventInfo } from "../../types";
import { formatTimestamp } from "../../utils";
import Host from "./Host";
import EventInfo from "./EventInfo";

export type EventLightCardProps = {
	event: eventInfo;
};

const EventLightCard: React.FC<EventLightCardProps> = ({ event }) => {
	return (
		<Link href={`event/${event.title}`}>
			<CardContainer>
				<>
					<div className="top_content">
						<BackgroundImage src={event.medias?.[0].thumbnail} />
						<Layer opacity={0.8} />
						<button className="transparent__button heart_icon">
							<HeartIcon isFilled={false} />
						</button>
						<div>
							<Host src="https://unsplash.it/100/100" username={event.owner.username} email={event.owner.email} />
						</div>
					</div>
					<div className="bottom_content">
						<div className="details">
							<EventInfo className="event__light_card" eventName={event.title} location={event.location.address} />
							<div className="ts_card">
								<span>{formatTimestamp(event.eventTimestamp, "D")}</span>
								<span>{formatTimestamp(event.eventTimestamp, "MMM")?.toUpperCase()}</span>
							</div>
						</div>
						<div className="footer">
							{event.price ? <Price className="price">${event.price}</Price> : null}
							<AttendeesContainer>
								<img src="https://unsplash.it/50/50" />
								<img src="https://unsplash.it/50/50" />
								<img src="https://unsplash.it/50/50" />
								<a href="">+72</a>
							</AttendeesContainer>
						</div>
					</div>
				</>
			</CardContainer>
		</Link>
	);
};

export default EventLightCard;
