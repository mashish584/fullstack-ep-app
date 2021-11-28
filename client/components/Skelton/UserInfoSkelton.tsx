import React from "react";
import SkeltonElement, { SkeltonElementProps } from "./SkeltonElement";

type UserInfoSkeltonProps = {
	color?: string;
};

const UserInfoSkelton: React.FC<UserInfoSkeltonProps> = ({ color }) => {
	const props: Omit<SkeltonElementProps, "width" | "height" | "type"> = {};

	if (color) {
		props.color = color;
	}

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<SkeltonElement type="avatar" width={50} height={50} {...props} />
			<div style={{ marginLeft: 15 }}>
				<SkeltonElement type="text" width={150} {...props} />
				<SkeltonElement type="text" width={200} {...props} />
			</div>
		</div>
	);
};

export default UserInfoSkelton;
