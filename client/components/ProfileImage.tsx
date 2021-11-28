import React from "react";
import Image from "next/image";
import { ProfileImageContainer } from "../styles/profile.style";

type ProfileImagePropType = {
	uri: string;
};

const ProfileImage: React.FC<ProfileImagePropType> = ({ uri }) => {
	return (
		<ProfileImageContainer className="profile__image">
			<Image src={uri} layout="fill" />
		</ProfileImageContainer>
	);
};

export default ProfileImage;
