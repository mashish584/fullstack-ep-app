import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "../utils/theme";
import Meta from "./Meta";


export default function Layout({ children }) {
	return (
		<ThemeProvider theme={lightTheme}>
			<Meta />
			{children}
		</ThemeProvider>
	);
}
