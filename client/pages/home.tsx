import React, { useRef, useState, useEffect, useCallback } from "react";
import SliderType from "react-slick";
import { Controller } from "react-scrollmagic";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import nprogress from "nprogress";
import Router from "next/router";

import Button from "../components/Button";
import EventDarkCard from "../components/Event/EventDarkCard";
import EventInfo from "../components/Event/EventInfo";
import EventLightCard from "../components/Event/EventLightCard";
import Host from "../components/Event/Host";
import Navigation from "../components/Navigation";
import SectionHead from "../components/SectionHead";
import SlickArrow from "../components/SlickArrow";
import Slider from "../components/Slider";
import FeaturedSkelton from "../components/Skelton/FeaturedSkelton";
import UpcomingSkelton from "../components/Skelton/UpcomingSkelton";
import EventListSkelton from "../components/Skelton/EventsListSkelton";

import { HomePageContainer, EventSlide, SubHeading, EventCategoryContainer, EventListContainer } from "../styles/home.style";
import { BackgroundImage, Layer } from "../styles/layout.style";
import { eventInfo } from "../types";
import { GET_EVENTS, GET_EVENTS_BY_FILTER } from "../apollo/queries";

const Home = () => {
	const [events, setEvents] = useState<eventInfo[]>([]);
	const [upcomingEvents, setUpcomingEvents] = useState<eventInfo[]>([]);
	const [featuredEvents, setFeaturedEvents] = useState<eventInfo[]>([]);

	const paginationRef = useRef({
		limit: 10,
		offset: 0,
		page: 0,
		count: 0,
	});

	const { data: $featureEvents, loading: isFeaturedEventsLoading } = useQuery(GET_EVENTS_BY_FILTER, {
		variables: { query: JSON.stringify({ featured: true }) },
	});

	const { data: $upcomingEvents, loading: isUpcomingEventsLoading } = useQuery(GET_EVENTS_BY_FILTER, {
		variables: { query: JSON.stringify({ upcoming: true }) },
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
			nprogress.start();
			fetchMore({
				variables: { skip: paginationRef.current.offset, take: paginationRef.current.limit },
				updateQuery: (_, { fetchMoreResult }) => {
					nprogress.done();
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
		if ($featureEvents) {
			const { events } = $featureEvents.events || {};
			if (events?.length) {
				setFeaturedEvents(events);
			}
		}
	}, [$featureEvents]);

	useEffect(() => {
		if ($upcomingEvents) {
			const { events } = $upcomingEvents.events || {};
			if (events?.length) {
				setUpcomingEvents(events);
			}
		}
	}, [$upcomingEvents]);

	useEffect(() => {
		if (data) {
			const { events, count } = data?.events || {};
			if (events?.length) {
				setEvents((prevEvents) => [...prevEvents, ...events]);
				updatePagination(count);
			}
		}
	}, [data]);

	return (
		<HomePageContainer>
			<Controller>
				<Navigation triggerId="#upcoming__events" userInfo={{ id: 1 }} />

				<div style={{ width: "100%", height: "100vh", maxHeight: "600px" }}>
					{isFeaturedEventsLoading ? (
						<FeaturedSkelton />
					) : (
						<Slider variant="fullScreen">
							{featuredEvents?.map((event: eventInfo) => (
								<EventSlide key={event.id}>
									<BackgroundImage src={event.medias?.[0].link} />
									<Layer opacity={0.7} />
									<div className="slide__container">
										<div className="slide__container_content">
											<EventInfo
												className="event__info_slide"
												timestamp={event.eventTimestamp}
												eventName={event.title}
												description={event.description}
											/>
											<SubHeading className="section_heading">Event Host:</SubHeading>
											<Host src="https://unsplash.it/100/100" username={event.owner.username} email={event.owner.email} />
											<Button
												id="slideEventDetail"
												title="View Details"
												width="231px"
												height="60px"
												showArrow={true}
												mt="40px"
												onClick={() => {
													Router.push(`/event/${event.title}`);
												}}
											/>
										</div>
									</div>
								</EventSlide>
							))}
						</Slider>
					)}
				</div>

				<section id="upcoming__events">
					<SectionHead
						title="Upcoming Events"
						actionComponent={!isUpcomingEventsLoading && <SlickArrow onNext={onNext} onPrev={onPrev} />}
					/>
					{isUpcomingEventsLoading ? (
						<UpcomingSkelton />
					) : (
						<Slider variant="contentSlide" ref={sliderRef}>
							{upcomingEvents?.map((event, index) => (
								<div key={event?.id}>
									<EventDarkCard width="355px" height="496px" />
								</div>
							))}
						</Slider>
					)}
				</section>

				<section id="categories__events">
					<SectionHead title="Categories" />
					{!isFeaturedEventsLoading && (
						<EventCategoryContainer>
							{["All", "Tailgating Parties", "Outdoor Parties", "Reunion Parties", "Match Party", "Inaugration Party"].map((category) => {
								const activeClass = category === "All" ? "active" : "";
								return <button className={`transparent__button ${activeClass}`}>{category}</button>;
							})}
						</EventCategoryContainer>
					)}
					<EventListContainer>
						{isFeaturedEventsLoading && !events.length ? (
							<EventListSkelton />
						) : (
							<InfiniteScroll
								dataLength={events.length}
								next={loadMore}
								hasMore={events.length < paginationRef.current.count}
								className={"pagination_container"}
								loader={null}>
								{events.map((event, index) => (
									<EventLightCard key={event.id} event={event} />
								))}
							</InfiniteScroll>
						)}
					</EventListContainer>
				</section>
			</Controller>
		</HomePageContainer>
	);
};

export default Home;
