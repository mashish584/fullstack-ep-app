import React from "react";
import { InputContainer, TextArea, TextInput } from "../../styles/form.style";
import { ProfileModalContainer } from "../../styles/profile.style";
import Button from "../Button";
import Modal, { ModalProps } from "../Modal";
import ProfileImage from "../ProfileImage";

type ProfileModalProps = {} & ModalProps;

const ProfileModal: React.FC<ProfileModalProps> = ({ ...props }) => {
	return (
		<Modal visible={props.visible} onToggle={props.onToggle}>
			<ProfileModalContainer>
				<ProfileImage uri="https://unsplash.it/400/400" />
				<form>
					<InputContainer mb={21}>
						<label htmlFor="username">Fullname</label>
						<TextInput type="text" id="username" name="username" onChange={() => {}} value={""} />
					</InputContainer>
					<InputContainer mb={21}>
						<label htmlFor="username">Username</label>
						<TextInput type="text" id="username" name="username" onChange={() => {}} value={""} />
					</InputContainer>
					<InputContainer mb={21}>
						<label htmlFor="username">Email</label>
						<TextInput type="text" id="username" name="username" onChange={() => {}} value={""} />
					</InputContainer>
					<InputContainer mb={21}>
						<label htmlFor="username">Bio</label>
						<TextArea id="username" name="username" onChange={() => {}} value={""} />
					</InputContainer>
					<Button title="Save" mt="15px" />
				</form>
			</ProfileModalContainer>
		</Modal>
	);
};

export default ProfileModal;
