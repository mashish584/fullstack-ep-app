import React from "react";
import Link from "next/link";

type SearchResultsProps = {
	results: Array<{
		id: string;
		name: string;
	}>;
	searchText: string;
	isSearching: boolean;
};

function createHighlight(text, searchTerm) {
	// split the string at the point(s) where the search term is present.
	const split = text.toLowerCase().split(searchTerm.toLowerCase());
	// create a placeholder string.
	let placeholderString = "";
	// loop through the splited string and put in the search term after each one and wrap it in a span with a class 'highlight' unless it is the last one.
	for (let i = 0; i < split.length; i++) {
		if (i === split.length - 1) {
			placeholderString += split[i];
		} else {
			placeholderString += `${split[i]}<span class="highlight">${searchTerm}</span>`;
		}
	}
	//return the string as HTML.
	return placeholderString;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, searchText, isSearching }) => {
	return (
		<div className="search__results">
			<h3>Search Results:</h3>
			{results?.map((result) => {
				const text = createHighlight(result.name, searchText);
				return (
					<div key={result.id}>
						<Link href="">
							<a dangerouslySetInnerHTML={{ __html: text }} />
						</Link>
					</div>
				);
			})}
			{results?.length === 0 && !isSearching && (
				<p>
					No result found with <b>{searchText}</b>
				</p>
			)}
			{isSearching && <p>Searching events...</p>}
		</div>
	);
};

export default SearchResults;
