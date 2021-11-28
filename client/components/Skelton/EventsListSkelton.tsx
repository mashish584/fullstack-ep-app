import React from "react";
import { EventListSkeltonWrapper } from "../../styles/skelton.style";
import Shimmer from "./Shimmer";
import SkeltonElement from "./SkeltonElement";
import UserInfoSkelton from "./UserInfoSkelton";

const EventListSkelton = () => {
	return (
		<EventListSkeltonWrapper className="skelton-wrapper">
			{Array(6)
				.fill(1)
				.map((_, index) => (
					<div className="card" key={`event_list_skelton_${index}`}>
						<div className="top-content">
							<UserInfoSkelton />
						</div>
						<div className="bottom-content">
							<div>
								<div>
									<SkeltonElement type="text" width={200} />
									<SkeltonElement type="text" width={100} />
								</div>
								<SkeltonElement type="thumbnail" width={50} height={67} />
							</div>
							<div style={{ marginTop: 25 }}>
								<SkeltonElement type="text" width={80} />
								<div className="attendees">
									<SkeltonElement type="avatar" />
									<SkeltonElement type="avatar" />
									<SkeltonElement type="avatar" />
								</div>
							</div>
							<Shimmer />
						</div>
					</div>
				))}
		</EventListSkeltonWrapper>
	);
};

export default EventListSkelton;
