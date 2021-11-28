import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
	query events($skip: Int!, $take: Int!) {
		events(skip: $skip, take: $take) {
			count
			events {
				id
				title
				description
				category
				eventTimestamp
				price
				owner {
					username
					email
				}
				medias {
					link
					thumbnail
				}
				location {
					lat
					lng
					address
				}
			}
		}
	}
`;

export const GET_EVENTS_BY_FILTER = gql`
	query events($query: String!) {
		events(query: $query, skip: 0, take: 0) {
			count
			events {
				id
				title
				description
				category
				eventTimestamp
				price
				owner {
					username
					email
				}
				medias {
					link
					thumbnail
				}
				location {
					lat
					lng
					address
				}
			}
		}
	}
`;

export const GET_EVENT_DETAIL = gql`
	query eventDetail($slug: String!) {
		eventDetail(slug: $slug) {
			id
			title
			description
			category
			eventTimestamp
			price
			owner {
				username
				email
			}
			medias {
				link
				thumbnail
			}
			location {
				lat
				lng
				address
			}
		}
	}
`;
