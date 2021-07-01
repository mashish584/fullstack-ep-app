import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import EventInfo from "./EventInfo";
import Host from "./Host";
import HeartIcon from "../Icons/HeartIcon";

import { EventDarkCard as CardContainer, Price } from "../../styles/event.style";
import { BackgroundImage, Layer } from "../../styles/layout.style";
import { EventCardStyleProps } from "../../styles/types";
import { SubHeading } from "../../styles/home.style";

type EventDarkCardProp = {} & EventCardStyleProps;

const EventDarkCard: React.FC<EventCardStyleProps> = ({ width, height }) => {
	const theme = useContext(ThemeContext);

	return (
		<CardContainer width={width} height={height}>
			<BackgroundImage src="https://unsplash.it/1000/1000" resizeMode="cover" />
			<Layer opacity={0.8} />
			<button className="transparent__button heart_icon">
				<HeartIcon isFilled={false} />
			</button>
			<div style={{ position: "relative", marginBottom: "50px" }}>
				<EventInfo
					className="event__dark_card"
					timestamp="Monday, 14 June,2021"
					eventName="REUNION"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet dignissim semper tellus.."
					location="2972 Westheimer Rd. Santa Ana, Illinois 85486"
				/>
				<SubHeading className="section_heading">Event Host:</SubHeading>
				<div className="card__footer">
					<Host src="https://unsplash.it/50/50" username="John Doe" email="john@mailinator.com" />
					<Price>$22</Price>
				</div>
			</div>
		</CardContainer>
	);
};

export default EventDarkCard;
