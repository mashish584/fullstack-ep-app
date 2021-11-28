import React from "react";

import { PaymentModalContainer } from "../../styles/profile.style";
import CheckoutForm from "../CardForm";
import Modal, { ModalProps } from "../Modal";
import PaymentCard from "../PaymentCard";

type PaymentInfoModalProps = {} & ModalProps;

const PaymentInfoModal: React.FC<PaymentInfoModalProps> = (props) => {
	return (
		<Modal visible={props.visible} onToggle={props.onToggle}>
			<PaymentModalContainer>
				<div className="card__container">
					<PaymentCard />
					<PaymentCard />
					<PaymentCard />
				</div>
				<CheckoutForm handleSubmit={() => {}} />
			</PaymentModalContainer>
		</Modal>
	);
};

export default PaymentInfoModal;
