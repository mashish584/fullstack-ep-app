import React, { useState } from "react";
import { Controller } from "react-scrollmagic";

import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import StatsCard from "../../components/StatsCard";
import EventLightCard from "../../components/Event/EventLightCard";
import ProfileModal from "../../components/Modals/ProfileModal";
import ProfileImage from "../../components/ProfileImage";
import PaymentInfoModal from "../../components/Modals/PaymentInfoModal";

import { lightTheme } from "../../utils/theme";

import { ProfileContainer, ProfileInfoCard } from "../../styles/profile.style";
import { EventListContainer } from "../../styles/home.style";
import ProfileMenu from "../../components/Modals/ProfileMenu";

const Profile = () => {
	const [showProfileModal, setShowProfileModal] = useState(false);
	const [showPaymentInfoModal, setShowPaymentInfoModal] = useState(false);
	const [showProfileMenuModal, setShowProfileMenuModal] = useState(false);

	const onShowProfileModalToggle = () => {
		setShowProfileModal((value) => !value);
	};

	const onShowPaymentInfoModalToggle = () => {
		setShowPaymentInfoModal((value) => !value);
	};

	const onShowProfileMenuModalToggle = () => {
		setShowProfileMenuModal((value) => !value);
	};

	return (
		<ProfileContainer>
			<Controller>
				<Navigation triggerId={"#statCards"} userInfo={{ id: 1 }} />
				<section className="content">
					<ProfileInfoCard>
						<div className="user__info">
							<ProfileImage uri="https://unsplash.it/400/400" />
							<div className="info">
								<div>
									<span className="name">John James</span>
									<span className="email">john@mailinator.com</span>
								</div>
								<div className="actions">
									<Button width="120px" height="40px" radius="5px" title="Edit" onClick={onShowProfileModalToggle} />
									<Button width="220px" height="40px" radius="5px" title="Payment Info" onClick={onShowPaymentInfoModalToggle} />
								</div>
								<Button
									width="120px"
									height="40px"
									radius="5px"
									title="Edit"
									onClick={onShowProfileMenuModalToggle}
									className="edit__mobile"
								/>
							</div>
						</div>
						<Button width="200px" height="50px" radius="5px" title="Delete Account" bg={lightTheme.colors.danger} />
					</ProfileInfoCard>
					<div id="statCards" className="info__cards">
						<StatsCard title="Events Hosted" count={10} />
						<StatsCard title="Events Attended" count={30} />
						<StatsCard title="Upcoming Events" count={70} />
					</div>
					<EventListContainer className="events_list">
						{Array(80)
							.fill(3)
							.map((_, index) => {
								return (
									<EventLightCard
										key={index}
										event={{
											title: "AAA",
											id: 1,
											eventTimestamp: "2021-11-27T08:04:10.390Z",
											owner: {
												username: "asda",
											},
											location: {
												address: "Asd",
											},
										}}
									/>
								);
							})}
					</EventListContainer>
				</section>
			</Controller>
			<ProfileModal visible={showProfileModal} onToggle={onShowProfileModalToggle} />
			<PaymentInfoModal visible={showPaymentInfoModal} onToggle={onShowPaymentInfoModalToggle} />
			<ProfileMenu visible={showProfileMenuModal} onToggle={onShowProfileMenuModalToggle} />
		</ProfileContainer>
	);
};

export default Profile;
