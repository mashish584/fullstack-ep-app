import React, { useEffect } from "react";
import { CloseButton, ModalCard, ModalLayer, ModalWrapper } from "../styles/modal.style";
import CloseIcon from "./Icons/CloseIcon";
import Portal from "./Portal";

export type ModalProps = {
	visible: boolean;
	className?: string;
	onToggle: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, visible, onToggle, ...props }) => {
	useEffect(() => {
		const body = document.querySelector("body");
		if (visible) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "visible";
		}
	}, [visible]);

	return (
		<Portal>
			<ModalWrapper className={props.className} visible={visible}>
				<ModalCard className="modal" width="500px">
					{children}
				</ModalCard>
				<ModalLayer>
					<CloseButton onClick={onToggle} className="transparent__button">
						<CloseIcon />
					</CloseButton>
				</ModalLayer>
			</ModalWrapper>
		</Portal>
	);
};

export default Modal;
