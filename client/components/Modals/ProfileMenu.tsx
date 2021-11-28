import React from "react";
import { Button } from "../../styles/form.style";
import { ProfileMenuContainer } from "../../styles/profile.style";
import Modal, { ModalProps } from "../Modal";

interface ProfileMenuProps extends ModalProps {}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ visible, onToggle }) => {
	return (
		<Modal visible={visible} onToggle={onToggle} className="profile_modal">
			<ProfileMenuContainer>
				<Button type="button">Update Profile</Button>
				<Button type="button">Updaye Payment Info</Button>
			</ProfileMenuContainer>
		</Modal>
	);
};

export default ProfileMenu;
