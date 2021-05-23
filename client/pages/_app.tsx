import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

import { lightTheme } from "../utils/theme";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={lightTheme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
