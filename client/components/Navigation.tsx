import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scene } from "react-scrollmagic";

import { NavigationContainer } from "../styles/nav.style";
import Button from "./Button";
import SearchIcon from "./Icons/SearchIcon";

const Navigation = () => {
	return (
		<Scene triggerHook={0.2} triggerElement="#upcoming__events" classToggle="menu_extend">
			<NavigationContainer id="nav">
				<Link href="#">
					<a>
						<h2 className="logo">EP</h2>
					</a>
				</Link>
				<div className="right_side">
					<Link href="#">
						<a className="search">
							<SearchIcon />
						</a>
					</Link>
					<div className="line"></div>
					<Button className="host_event">Host Event</Button>
					<Link href="#">
						<a className="bell">
							<FontAwesomeIcon icon="bell" />
						</a>
					</Link>
					<Link href="#">
						<a className="profile">
							<Image src="https://unsplash.it/100/100" width={42} height={42} />
						</a>
					</Link>
				</div>
			</NavigationContainer>
		</Scene>
	);
};

export default Navigation;
