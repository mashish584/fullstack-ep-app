import React from "react";
import { SliderSkeltonWrapper } from "../../styles/skelton.style";
import Shimmer from "./Shimmer";
import SkeltonElement from "./SkeltonElement";
import UserInfoSkelton from "./UserInfoSkelton";

const FeaturedSkelton = () => {
	return (
		<SliderSkeltonWrapper className="skelton-wrapper">
			<div className="skelton-content">
				<SkeltonElement type="text" width={100} />
				<SkeltonElement type="heading" width={200} />
				<SkeltonElement type="text" width={300} />
				<SkeltonElement type="text" width={300} />
				<SkeltonElement type="text" width={250} />
				<SkeltonElement type="text" width={70} mt={24} />
				<UserInfoSkelton />
				<SkeltonElement type="button" />
			</div>
			<Shimmer />
		</SliderSkeltonWrapper>
	);
};

export default FeaturedSkelton;
