import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/link-error";
import withApollo from "next-with-apollo";

function createClient({ headers, initialState }) {
	const errorLink = onError(({ graphQLErrors, networkError }) => {
		if (graphQLErrors) {
		}

		if (networkError) {
		}
	});

	const httpLink = createUploadLink({
		uri: process.env.ENDPOINT,
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
