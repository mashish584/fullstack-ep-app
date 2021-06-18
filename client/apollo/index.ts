import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/link-error";
import withApollo from "next-with-apollo";
import getConfig from "next/config";

function createClient({ headers, initialState }) {
	const { publicRuntimeConfig } = getConfig();
	const errorLink = onError(({ graphQLErrors, networkError }) => {
		if (graphQLErrors) {
			graphQLErrors.forEach(({ message, locations, path }) =>
				console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
			);
		}

		if (networkError) {
			console.log(`[Network error]: ${networkError}`);
		}
	});

	const httpLink = createUploadLink({
		uri: publicRuntimeConfig.ENDPOINT,
		fetchOptions: {
			credentials: "include",
		},
		headers,
	});

	return new ApolloClient({
		link: ApolloLink.from([errorLink, httpLink]),
		cache: new InMemoryCache({}).restore(initialState || {}),
		ssrMode: !process.browser,
		connectToDevTools: process.browser,
	});
}

export default withApollo(createClient);
