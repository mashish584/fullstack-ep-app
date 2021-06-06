import React, { useContext } from "react";

import { ThemeContext } from "styled-components";
import { Container } from "../styles/layout.style";
import { GlobalStyle } from "../styles/global.style";

import { lightTheme } from "../utils/theme";
import Meta from "./Meta";

const Layout = ({ children }) => {
	const theme = useContext<typeof lightTheme>(ThemeContext);
	return (
		<Container bg={theme.colors.white}>
			<Meta />
			<GlobalStyle theme={theme} />
			{children}
		</Container>
	);
};

export default Layout;
