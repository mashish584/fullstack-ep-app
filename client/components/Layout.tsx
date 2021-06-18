import React from "react";

import { Container } from "../styles/layout.style";
import { GlobalStyle } from "../styles/global.style";

import Meta from "./Meta";

const Layout = ({ children }) => {
	return (
		<Container>
			<Meta />
			<GlobalStyle />
			{children}
		</Container>
	);
};

export default Layout;
