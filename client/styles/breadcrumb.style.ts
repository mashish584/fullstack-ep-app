import styled from "styled-components";
import { montserratMedium, montserratRegular } from "./font.style";
import { flexy } from "./mixin.style";

export const BreadCrumbContainer = styled.div`
	${flexy}
	a {
		${montserratRegular}
		text-transform: capitalize;
		text-decoration: none;
		font-size: 2.4rem;
		color: ${({ theme }) => theme.colors.blackDim};
		&:first-child {
			${montserratMedium}
		}
	}

	svg {
		margin: 0 0.5rem;
		width: 25px;
		height: 15px;
	}
`;
