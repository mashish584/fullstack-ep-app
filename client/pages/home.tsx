import React, { useRef, useState } from "react";
import SliderType from "react-slick";
import { Controller } from "react-scrollmagic";
import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";

import { useEffect } from "react";
import { useCallback } from "react";
import Button from "../components/Button";
import EventDarkCard from "../components/Event/EventDarkCard";
import EventInfo from "../components/Event/EventInfo";
import EventLightCard from "../components/Event/EventLightCard";
import Host from "../components/Event/Host";
import Navigation from "../components/Navigation";
import SectionHead from "../components/SectionHead";
import SlickArrow from "../components/SlickArrow";
import Slider from "../components/Slider";

import { HomePageContainer, EventSlide, SubHeading, EventCategoryContainer, EventListContainer } from "../styles/home.style";
import { BackgroundImage, Layer } from "../styles/layout.style";

const GET_EVENTS = gql`
	query events($skip: Int!, $take: Int!) {
		events(skip: $skip, take: $take) {
			count
			events {
				title
			}
		}
	}
`;

const Home = () => {
	const [events, setEvents] = useState([]);
	const paginationRef = useRef({
		limit: 10,
		offset: 0,
		page: 0,
		count: 0,
	});

	const { data, fetchMore } = useQuery(GET_EVENTS, {
		variables: { skip: 0, take: 10 },
	});
	const sliderRef = useRef<SliderType | null>(null);

	const onNext = () => {
		sliderRef?.current?.slickNext();
	};

	const onPrev = () => {
		sliderRef?.current?.slickPrev();
	};

	const updatePagination = useCallback((count) => {
		let { page, offset, limit } = paginationRef.current;
		page += 1;
		offset = page * limit;
		paginationRef.current = {
			...paginationRef.current,
			page,
			offset,
			count,
		};
	}, []);

	const loadMore = useCallback(() => {
		if (fetchMore) {
			fetchMore({
				variables: { skip: paginationRef.current.offset, take: paginationRef.current.limit },
				updateQuery: (_, { fetchMoreResult }) => {
					const { events, count } = fetchMoreResult.events || {};
					if (events?.length) {
						setEvents((prev) => [...prev, ...events]);
						updatePagination(count);
					}
				},
			});
		}
	}, [fetchMore]);

	useEffect(() => {
		const { events, count } = data?.events || {};
		if (events?.length) {
			setEvents((prevEvents) => [...prevEvents, ...events]);
			updatePagination(count);
		}
	}, [data]);

	return (
		<HomePageContainer>
			<Controller>
				<Navigation />
				<div style={{ width: "100%", height: "100vh" }}>
					<Slider variant="fullScreen">
						{[
							"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
							"https://images.pexels.com/photos/2888802/pexels-photo-2888802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
							"https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
						].map((slide) => (
							<EventSlide key={slide}>
								<BackgroundImage src={slide} />
								<Layer opacity={0.7} />
								<div className="slide__container">
									<div className="slide__container_content">
										<EventInfo
											timestamp="Monday, 14 June,2021"
											eventName="REUNION"
											description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet dignissim semper tellus.."
										/>
										<SubHeading className="section_heading">Event Host:</SubHeading>
										<Host src="https://unsplash.it/100/100" username="John Doe" email="john@example.com" />
										<Button title="View Details" width="231px" height="60px" showArrow={true} mt="40px" />
									</div>
								</div>
							</EventSlide>
						))}
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
					<EventCategoryContainer>
						{["Tailgating Parties", "Outdoor Parties", "Reunion Parties", "Match Party", "Inaugration Party"].map((category) => {
							const activeClass = category === "Tailgating Parties" ? "active" : "";
							return <button className={`transparent__button ${activeClass}`}>{category}</button>;
						})}
					</EventCategoryContainer>
					<EventListContainer>
						<InfiniteScroll
							dataLength={events.length}
							next={loadMore}
							hasMore={events.length < paginationRef.current.count}
							className={"pagination_container"}
							loader={<h2>Loading....</h2>}>
							{events.map((_, index) => (
								<EventLightCard key={index} />
							))}
						</InfiniteScroll>
					</EventListContainer>
				</section>
			</Controller>
		</HomePageContainer>
	);
};

export default Home;
