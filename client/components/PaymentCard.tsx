import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
	min-width: 344px;
	height: 213px;
	background: url("/layer.png") no-repeat center;
	background-size: cover;
	position: relative;
	border-radius: 5px;
	position: relative;
	margin-right: 10px;
	#content {
		position: absolute;
		left: 25px;
		bottom: 50px;
		color: ${({ theme }) => theme.colors.white};
		span {
			display: block;
			font-size: 1.5rem;
			font-family: ${({ theme }) => theme.fonts.montserrat};
			&:last-child {
				margin-top: 10px;
			}
		}
	}
`;

interface PaymentCardProps {
	cardNumber?: string;
	expiry?: string;
}

const PaymentCard: React.FC<PaymentCardProps> = () => {
	return (
		<CardContainer>
			<div id="content">
				<span>XXXX XXXX XXXX XXXX</span>
				<span>02/22</span>
			</div>
		</CardContainer>
	);
};

export default PaymentCard;
