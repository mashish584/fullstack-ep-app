import React, { useRef } from "react";
import Image from "next/image";
import SliderType from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NextApiRequest, NextApiResponse } from "next";
import BreadCrumb from "../../components/Breadcrumb";
import Navigation from "../../components/Navigation";
import Slider from "../../components/Slider";
import Host from "../../components/Event/Host";
import Button from "../../components/Button";
import SectionHead from "../../components/SectionHead";
import Attendee from "../../components/Event/Attendee";

import { DetailPageContainer } from "../../styles/event-detail.style";
import { BackgroundImage } from "../../styles/layout.style";
import { SlickThumbnail, SlickThumbnailContainer } from "../../styles/slick.style";
import { GET_EVENT_DETAIL } from "../../apollo/queries";
import { apolloServerRequest } from "../../apollo";
import { eventInfo } from "../../types";

type EventDetailsProps = {
	event: eventInfo;
};

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
	const sliderRef = useRef<SliderType | null>(null);

	return (
		<DetailPageContainer>
			<Navigation className="menu_extend" />
			<section id="head">
				<BreadCrumb />
				<div id="slideContainer" style={{ width: "100%", height: "557px", maxHeight: "600px" }}>
					<Slider
						variant="fullScreen"
						// hidePagination={true}
						ref={sliderRef}
						customConfig={{
							fade: true,
							speed: 1200,
							autoplay: true,
							appendDots: (dots) => <SlickThumbnailContainer>{dots}</SlickThumbnailContainer>,
							customPaging: (index) => {
								return (
									<SlickThumbnail>
										<Image src={event.medias[index].thumbnail} width={"100%"} height={"100%"} />
									</SlickThumbnail>
								);
							},
						}}>
						{event.medias.map((media, index) => (
							<div key={`thumbnail_${media.id}`} className="slide__item">
								<BackgroundImage src={media.link} style={{ width: "100%", height: "100%" }} />
							</div>
						))}
					</Slider>
				</div>
			</section>
			<section id="content">
				<h2>{event.title}</h2>
				<div className="event__info">
					<span>
						<FontAwesomeIcon icon={"calendar"} width={30} height={40} />
						Monday 13 June at 10:52 PM
					</span>
					<span>
						<FontAwesomeIcon icon={"map-marker-alt"} width={30} height={40} />
						{event.location.address}
					</span>
				</div>
				<p>{event.description}</p>

				<h3>Meet your host:</h3>
				<Host username={event.owner.username} email={event.owner.email} src={"https://unsplash.it/100/100"} />
				<div className="price_info">
					<p>
						<span>${event.price}</span>
						Hurry up! 20 more tickets left only...
					</p>
					<Button title={"Get Your Ticket"} />
				</div>
			</section>

			<section id="attendees">
				<SectionHead title="Attendees" />
				<div>
					<Attendee src={"https://unsplash.it/100/100"} username={"Ashish"} email={"ashish@example.com"} />
					<Attendee src={"https://unsplash.it/100/100"} username={"Ashish"} email={"ashish@example.com"} />
					<Attendee src={"https://unsplash.it/100/100"} username={"Ashish"} email={"ashish@example.com"} />
					<Attendee src={"https://unsplash.it/100/100"} username={"Ashish"} email={"ashish@example.com"} />
					<Attendee src={"https://unsplash.it/100/100"} username={"Ashish"} email={"ashish@example.com"} />
					<Attendee src={"https://unsplash.it/100/100"} username={"Ashish"} email={"ashish@example.com"} />
					<Attendee src={"https://unsplash.it/100/100"} username={"Ashish"} email={"ashish@example.com"} />
					<Attendee src={"https://unsplash.it/100/100"} username={"Ashish"} email={"ashish@example.com"} />
					<Attendee src={"https://unsplash.it/100/100"} username={"Ashish"} email={"ashish@example.com"} />
				</div>
				<Button title={"View More"} />
			</section>
		</DetailPageContainer>
	);
};

export async function getServerSideProps(req: NextApiRequest, res: NextApiResponse) {
	const request = await apolloServerRequest.request(GET_EVENT_DETAIL, {
		slug: req.query.slug,
	});

	return {
		props: {
			event: request.eventDetail,
		},
	};
}

export default EventDetails;
