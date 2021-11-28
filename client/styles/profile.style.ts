import styled from "styled-components";
import { montserratBold, montserratLight, montserratMedium } from "./font.style";
import { flexy } from "./mixin.style";
import { breakPoints, flexWidth } from "./util.style";

export const ProfileContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.lightBg};
	.content {
		padding: 150px 100px 0;
		@media screen and (max-width: ${breakPoints.sm}) {
			padding: 80px 0;
		}
	}
	.info__cards {
		${flexy};
		justify-content: space-between;
		margin-top: 70px;

		> div {
			flex-basis: ${flexWidth(3, 1.5)};
		}

		@media screen and (max-width: ${breakPoints.sm}) {
			margin: 10px;
		}
	}
	.events_list {
		margin-top: 70px;
		@media screen and (max-width: ${breakPoints.sm}) {
			margin-top: 20px;
			padding: 0 10px;
		}
	}
`;

export const ProfileInfoCard = styled.div`
	${flexy}
	width:100%;
	height: 175px;
	border: 1px solid ${({ theme }) => theme.colors.darkGray};
	border-radius: 10px;
	padding: 0 30px;
	background-color: ${({ theme }) => theme.colors.white};
	justify-content: space-between;
	.user__info {
		${flexy}
		height:130px;
		span {
			display: block;
		}
		.name {
			${montserratBold}
			font-size: 2.4rem;
		}
		.email {
			${montserratLight}
			font-size:1.8rem;
		}

		.button__content {
			${montserratMedium}
			font-size:1.8rem;
		}
	}
	.info {
		${flexy}
		flex-direction:column;
		align-self: flex-start;
		align-items: start;
		height: 100%;
		justify-content: space-between;
		padding: 10px 0;
	}
	.actions {
		flex-direction: "row";
		button:first-child {
			margin-right: 1rem;
		}
	}

	.edit__mobile {
		display: none;
	}

	@media screen and (max-width: ${breakPoints.sm}) {
		height: 350px;
		flex-direction: column;
		border-radius: 0;
		padding: 25px;
		justify-content: center;

		.user__info {
			flex-direction: column;
			height: initial;
			.profile__image {
				width: 130px;
				min-height: 130px;
				border-radius: 50%;
				margin: 0 auto;
			}
		}

		.info {
			align-items: center;
			text-align: center;
		}

		.actions {
			display: none;
		}

		.edit__mobile {
			margin-top: 25px;
			max-height: 30px;
			max-width: 100px;
			display: block;
		}

		> button:last-child {
			display: none;
		}
	}
`;

export const ProfileImageContainer = styled.div`
	position: relative;
	width: 130px;
	height: 130px;
	border-radius: 17px;
	overflow: hidden;
	margin-right: 30px;
`;

export const ProfileModalContainer = styled.div`
	margin: 15px 0 30px;
	form {
		margin-top: 30px;
	}
`;

export const PaymentModalContainer = styled.div`
	margin: 15px 0 30px;
	.card__container {
		${flexy};
		width: 100%;
		overflow: scroll;
		margin-bottom: 35px;
	}
`;

export const ProfileMenuContainer = styled.div`
	button {
		background-color: transparent;
		color: ${({ theme }) => theme.colors.black};
		font-size: 1.3rem;
		max-height: 40px;
		&:first-child {
			border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
			border-radius: 0;
		}
	}
`;
