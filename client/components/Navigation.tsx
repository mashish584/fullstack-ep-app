import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scene } from "react-scrollmagic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRouter } from "next/router";
import { NavigationContainer } from "../styles/nav.style";
import { userInfo } from "../types";
import Button from "./Button";
import Search from "./Search";
import MobileNav from "./MobileNav";

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
	userInfo: Pick<userInfo, "id">;
	triggerId?: string;
}

const Navigation: React.FC<NavProps> = ({ userInfo, ...props }) => {
	const router = useRouter();

	const [isMenuactive, setIsMenuActive] = useState(false);

	return (
		<Scene triggerHook={0.2} triggerElement={props.triggerId} classToggle="menu_extend">
			<NavigationContainer id="nav" {...props}>
				<Link href="#">
					<a
						onClick={(e) => {
							e.preventDefault();
							setIsMenuActive(true);
						}}
						className="bars">
						<FontAwesomeIcon icon="bars" />
					</a>
				</Link>
				<Link href="/">
					<a>
						<h2 className="logo">EP</h2>
					</a>
				</Link>

				<Link href="/profile/1">
					<a className="sm_profile">
						<Image src="https://unsplash.it/100/100" width={42} height={42} />
					</a>
				</Link>
				<div className="right_side">
					<Search />
					<div className="line"></div>
					<Button
						className="host_event"
						onClick={() => {
							router.push("/event/event-add");
						}}>
						Host Event
					</Button>

					<Link href="#">
						<a className="bell">
							<FontAwesomeIcon icon="bell" />
						</a>
					</Link>
					<Link href="/profile/1">
						<a
							onClick={(e) => {
								e.preventDefault();
								setIsMenuActive((state) => !state);
							}}
							className="profile">
							<Image src="https://unsplash.it/100/100" width={42} height={42} />
						</a>
					</Link>
					<div id="user_menu" className={`${isMenuactive ? "active" : ""}`}>
						<Link href={"/profile/1"}>
							<a>Profile</a>
						</Link>
						<Link href="#">
							<a>Logout</a>
						</Link>
					</div>
				</div>
				<MobileNav isActive={isMenuactive} onClose={() => setIsMenuActive(false)} />
			</NavigationContainer>
		</Scene>
	);
};

export default Navigation;
