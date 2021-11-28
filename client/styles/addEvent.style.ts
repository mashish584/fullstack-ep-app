import styled from "styled-components";
import { breakPoints } from "./util.style";

export const AddEventContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.lightBg};
	padding: 0rem 10rem 5rem;
	overflow-x: hidden;

	@media screen and (max-width: ${breakPoints.sm}) {
		padding: 0rem 2.2rem 5rem;
	}

	section {
		width: 700px;
		margin: 18rem auto;

		#event__form {
			margin: 14.5rem auto;
		}

		@media screen and (max-width: ${breakPoints.sm}) {
			width: 100%;
			#event__form {
				margin: 7.5rem auto;
			}
		}
	}
`;
