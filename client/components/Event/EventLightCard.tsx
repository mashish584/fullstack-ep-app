import React from "react";
import { AttendeesContainer, EventLightCard as CardContainer, Price } from "../../styles/event.style";
import { BackgroundImage, Layer } from "../../styles/layout.style";
import HeartIcon from "../Icons/HeartIcon";
import EventInfo from "./EventInfo";
import Host from "./Host";

type Ref = any;

const EventLightCard = React.forwardRef<Ref, {}>(({ children }, ref) => {
	return (
		<CardContainer ref={ref}>
			<div className="top_content">
				<BackgroundImage src="https://unsplash.it/1000/1000" />
				<Layer opacity={0.8} />
				<button className="transparent__button heart_icon">
					<HeartIcon isFilled={false} />
				</button>
				<div>
					<Host src="https://unsplash.it/100/100" username="John Doe" email="john@mailinator.com" />
				</div>
			</div>
			<div className="bottom_content">
				<div className="details">
					<EventInfo
						className="event__light_card"
						timestamp="Monday, 14 June,2021"
						eventName="REUNION"
						location="2972 Westheimer Rd. Santa Ana, Illinois 85486"
					/>
					<div className="ts_card">
						<span>5</span>
						<span>DEC</span>
					</div>
				</div>
				<div className="footer">
					<Price className="price">$22</Price>
					<AttendeesContainer>
						<img src="https://unsplash.it/50/50" />
						<img src="https://unsplash.it/50/50" />
						<img src="https://unsplash.it/50/50" />
						<a href="">+72</a>
					</AttendeesContainer>
				</div>
			</div>
		</CardContainer>
	);
});

export default EventLightCard;
