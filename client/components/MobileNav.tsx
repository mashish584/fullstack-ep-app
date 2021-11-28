import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MobileNavContainer = styled.nav`
	position: fixed;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.white};
	top: 0;
	left: 0;
	bottom: 0;
	transform: translateX(-100%);
	transition: 100ms ease-in;

	&.active {
		transform: translateX(0);
	}

	.close_icon {
		position: absolute;
		font-size: 3rem;
		background: transparent;
		border: none;
		right: 25px;
		top: 25px;
	}

	ul {
		margin-top: 70px;
		a {
			font-size: 3.5rem;
			color: ${({ theme }) => theme.colors.black};
			text-align: center;
			display: block;
			padding: 25px;
		}
	}
`;

interface MobileNavProps {
	isActive: boolean;
	onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isActive, onClose }) => {
	return (
		<MobileNavContainer className={isActive ? "active" : ""}>
			<button onClick={() => onClose()} className="close_icon">
				✕
			</button>
			<ul>
				<li>
					<Link href="#">
						<a>Profile</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>Logout</a>
					</Link>
				</li>
			</ul>
		</MobileNavContainer>
	);
};

export default MobileNav;
