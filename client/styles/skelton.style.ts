import styled from "styled-components";
import { flexy } from "./mixin.style";
import { breakPoints, flexWidth } from "./util.style";

export const SliderSkeltonWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-left: 100px !important;
	padding-bottom: 70px !important;
	background: ${({ theme }) => theme.colors.white};
	margin-top: 0;
	.skelton-content {
		width: 50%;
	}
	@media screen and (max-width: ${breakPoints.xs}) {
		padding-left: 22px !important;
		padding-bottom: 50px !important;
		.skelton-content {
			width: 100%;
		}
	}
`;

export const UpcomingSkeltonWrapper = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: row;
	padding: 0;
	.card {
		min-width: 353px;
		height: 494px;
		background: ${({ theme }) => theme.colors.white};
		margin-right: 20px;
		border-radius: 15px;
		position: relative;
		padding: 0 22px;
		> div {
			position: absolute;
			bottom: 50px;
		}
	}
	@media screen and (max-width: ${breakPoints.sm}) {
		padding-left: 22px;
	}
`;

export const EventListSkeltonWrapper = styled.div`
	width: 100%;
	${flexy}
	flex-wrap:wrap;
	.card {
		flex-basis: ${flexWidth(3, 1.5)};
		min-height: 400px;
		margin: 1.5%;
		margin-left: 0;
		background: #dcdcdc;
		border-radius: 10px;
		overflow: hidden;
		.top-content {
			${flexy};
			flex-direction: column;
			height: 240px;
			padding: 22px;
			justify-content: flex-end;
			align-items: flex-start;
			background: #ffffff;
		}
		.bottom-content {
			position: relative;
			padding: 22px;
			> div {
				${flexy}
				justify-content : space-between;
			}
			.attendees {
				${flexy}
				>div {
					margin-right: 2px;
				}
			}
		}
		@media screen and (max-width: ${breakPoints.xs}) {
			flex-basis: ${flexWidth(2, 1.5)};
			margin: 1.5%;
			margin-left: 0;
		}

		@media screen and (max-width: ${breakPoints.xss}) {
			flex-basis: ${flexWidth(1, 0)};
			margin: 1.5% 0;
		}
	}
`;
