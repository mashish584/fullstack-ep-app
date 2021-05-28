import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import Layout from "../components/Layout";
import { lightTheme } from "../utils/theme";
import withApollo from "../apollo";

function MyApp({ Component, pageProps, apollo }) {
	return (
		<ApolloProvider client={apollo}>
			<ThemeProvider theme={lightTheme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default withApollo(MyApp);
