import React from "react";
import { UpcomingSkeltonWrapper } from "../../styles/skelton.style";
import Shimmer from "./Shimmer";
import SkeltonElement from "./SkeltonElement";
import UserInfoSkelton from "./UserInfoSkelton";

const UpcomingSkelton = () => {
	return (
		<UpcomingSkeltonWrapper className="skelton-wrapper">
			{Array(7)
				.fill(1)
				.map((_, index) => (
					<div className="card" key={`upcoming_event_slide_${index}`}>
						<div>
							<SkeltonElement type="text" width={100} />
							<SkeltonElement type="heading" width={150} />
							<SkeltonElement type="text" width={240} />
							<SkeltonElement type="text" width={240} />
							<SkeltonElement type="text" width={220} />
							<SkeltonElement type="text" width={70} mt={24} />
							<UserInfoSkelton />
						</div>
						<Shimmer />
					</div>
				))}
		</UpcomingSkeltonWrapper>
	);
};

export default UpcomingSkelton;
