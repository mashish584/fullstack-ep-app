import React from "react";
import { useRouter } from "next/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { Container } from "../styles/layout.style";
import { GlobalStyle } from "../styles/global.style";

import Meta from "./Meta";

library.add(fas);

const Layout = ({ children }) => {
	const router = useRouter();
	const isPaddingRequired = !["/home"].includes(router.pathname);

	return (
		<Container ph={isPaddingRequired ? 100 : 0}>
			<Meta />
			<GlobalStyle />
			{children}
		</Container>
	);
};

export default Layout;
