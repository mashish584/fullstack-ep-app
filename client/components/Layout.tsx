import React, { useContext } from "react";

import { ThemeContext } from "styled-components";
import { Container } from "../styles/layout.style";
import { GlobalStyle } from "../styles/global.style";
import Meta from "./Meta";

export default function Layout({ children }) {
	const theme = useContext(ThemeContext);
	return (
		<Container bg={theme.colors.secondary}>
			<Meta />
			<GlobalStyle themeColor={theme.colors.primary} />
			{children}
		</Container>
	);
}
