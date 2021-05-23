import React, { useContext } from "react";

import { ThemeContext } from "styled-components";
import { Container } from "../styles/layout.style";
import { GlobalStyle } from "../styles/global.style";
import Meta from "./Meta";

export default function Layout({ children }) {
	const theme = useContext(ThemeContext);
	console.log({ theme });
	return (
		<Container bg={"#222"}>
			<Meta />
			<GlobalStyle />
			{children}
		</Container>
	);
}
