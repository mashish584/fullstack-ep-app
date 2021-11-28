import { gql, useLazyQuery } from "@apollo/client";
import Link from "next/link";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

import SearchIcon from "../components/Icons/SearchIcon";
import { debounce } from "../utils";
import SearchResults from "./SearchResults";

const SEARCH_EVENTS = gql`
	query events($query: String!, $take: Int!) {
		events(query: $query, take: $take) {
			events {
				id
				title
			}
		}
	}
`;

const Search: React.FC = () => {
	const searchText = useRef("");
	const [searchResults, setSearchResults] = useState(null);
	const [searchEvents, { loading, data }] = useLazyQuery(SEARCH_EVENTS, {
		variables: {
			query: JSON.stringify({
				search: searchText.current,
			}),
			take: 10,
		},
	});

	if (loading) console.log("API CALLED =>");

	const searchEvent = debounce((e) => {
		const value = e.target.value.trim();
		if (value === "") {
			searchText.current = "";
			setSearchResults(null);
		} else {
			console.log({ value });
			setSearchResults([]);
			searchText.current = value;
			searchEvents();
		}
	}, 700);

	useEffect(() => {
		const events = data?.events?.events;
		if (events?.length && searchText.current !== "") {
			const results = events.map((event) => ({ id: event.id, name: event.title }));
			setSearchResults(results);
		}
	}, [data, searchText.current]);

	return (
		<div id="search">
			<Link href="#">
				<a className="search_icon">
					<SearchIcon />
				</a>
			</Link>
			<input type="text" placeholder={"Search Event"} onChange={searchEvent} />
			{searchResults !== null && <SearchResults isSearching={loading} results={searchResults} searchText={searchText.current} />}
		</div>
	);
};

export default Search;
