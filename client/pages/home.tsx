import React, { useRef } from "react";
import SliderType from "react-slick";

import Button from "../components/Button";
import EventDarkCard from "../components/Event/EventDarkCard";
import EventInfo from "../components/Event/EventInfo";
import Host from "../components/Event/Host";
import SectionHead from "../components/SectionHead";
import SlickArrow from "../components/SlickArrow";
import Slider from "../components/Slider";

import { HomePageContainer, EventSlide, SubHeading } from "../styles/home.style";
import { BackgroundImage, Layer } from "../styles/layout.style";

const Home = () => {
	const sliderRef = useRef<SliderType | null>(null);

	const onNext = () => {
		sliderRef?.current?.slickNext();
	};

	const onPrev = () => {
		sliderRef?.current?.slickPrev();
	};

	return (
		<HomePageContainer>
			<div style={{ width: "100%", height: "100vh" }}>
				<Slider variant="fullScreen">
					<EventSlide>
						<BackgroundImage src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
						<Layer opacity={0.6} />
						<div className="slide__container">
							<div className="slide__container_content">
								<EventInfo timestamp="" eventName="" description="" />
								<SubHeading className="section_heading">Event Host:</SubHeading>
								<Host src="https://unsplash.it/100/100" username="John Doe" email="john@example.com" />
								<Button title="View Details" width="231px" height="60px" showArrow={true} mt="40px" />
							</div>
						</div>
					</EventSlide>
					<EventSlide>
						<BackgroundImage src="https://images.pexels.com/photos/2888802/pexels-photo-2888802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
						<Layer opacity={0.6} />
						<div className="slide__container">
							<div className="slide__container_content">
								<EventInfo timestamp="" eventName="" description="" />
								<SubHeading className="section_heading">Event Host:</SubHeading>
								<Host src="https://unsplash.it/100/100" username="John Doe" email="john@example.com" />
								<Button title="View Details" width="231px" height="60px" showArrow={true} mt="40px" />
							</div>
						</div>
					</EventSlide>
					<EventSlide>
						<BackgroundImage src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
						<Layer opacity={0.6} />
						<div className="slide__container">
							<div className="slide__container_content">
								<EventInfo timestamp="" eventName="" description="" />
								<SubHeading className="section_heading">Event Host:</SubHeading>
								<Host src="https://unsplash.it/100/100" username="John Doe" email="john@example.com" />
								<Button title="View Details" width="231px" height="60px" showArrow={true} mt="40px" />
							</div>
						</div>
					</EventSlide>
				</Slider>
			</div>
			<section id="upcoming__events">
				<SectionHead title="Upcoming Events" actionComponent={<SlickArrow onNext={onNext} onPrev={onPrev} />} />
				<Slider variant="contentSlide" ref={sliderRef}>
					{[1, 2, 3, 4, 5, 6, 7].map((slide, index) => (
						<EventDarkCard key={index} width="355px" height="496px" />
					))}
					<div style={{ width: "355px", height: "496px" }} />
				</Slider>
			</section>
			<section id="categories__events">
				<SectionHead title="Categories" />
			</section>
		</HomePageContainer>
	);
};

export default Home;
