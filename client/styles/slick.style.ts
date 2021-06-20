import styled from "styled-components";

export const SlickPaginationContainer = styled.div`
	position: absolute;
	height: 20px;
	width: 30rem;
	right: 100px;
	bottom: 10%;
	ul li {
		width: 70px;
		&.slick-active span {
			background: ${({ theme }) => theme.colors.white};
		}
	}
`;

export const SlickPaging = styled.span`
	display: inline-block;
	width: 70px;
	height: 4px;
	background: ${({ theme }) => theme.colors.secondary};
	border-radius: 5px;
`;
