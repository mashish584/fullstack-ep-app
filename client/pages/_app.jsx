import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "../components/Layout";
import { lightTheme } from "../utils/theme";
import withApollo from "../apollo";

function MyApp({ Component, pageProps, apollo }) {
	return (
		<ApolloProvider client={apollo}>
			<ThemeProvider theme={lightTheme}>
				<CookiesProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
					<ToastContainer />
				</CookiesProvider>
			</ThemeProvider>
		</ApolloProvider>
	);
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
	let pageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	pageProps.query = ctx.query;
	return { pageProps };
};

export default withApollo(MyApp);
