import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { Container } from "../styles/layout.style";
import { GlobalStyle } from "../styles/global.style";

import Meta from "./Meta";

library.add(fas);

const Layout = ({ children }) => {
	const [isPadding, setIsPadding] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const { pathname } = router;
		setIsPadding(["/signin", "/signup", "/forgot-password"].includes(pathname));
	}, [router.pathname]);

	return (
		<Container ph={isPadding ? 100 : 0}>
			<Meta />
			<GlobalStyle />
			{children}
			<div id="portal" />
			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVLG4rzu01-HRm1QuNvvCmGK0UA7jG6kU&libraries=places"></script>
		</Container>
	);
};

export default Layout;
