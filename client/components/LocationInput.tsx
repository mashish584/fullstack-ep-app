import { useState } from "react";
import PlacesAutocomplete, { getLatLng, geocodeByPlaceId } from "react-places-autocomplete";
import { TextInput } from "../styles/form.style";

type LocationInputProps = {
	handleChange: (data: string) => void;
	value: string;
};

const LocationInput: React.FC<LocationInputProps> = ({ handleChange }) => {
	const [address, setAddress] = useState("");

	const updateAddress = (address) => setAddress(address);

	const handleSelect = async (address, placeId) => {
		setAddress(address);
		const response = await geocodeByPlaceId(placeId);
		if (response?.length) {
			const { lat, lng } = await getLatLng(response[0]);
			const addressData = {
				lat,
				lng,
				address: address,
			};
			handleChange(JSON.stringify(addressData));
		}
	};

	return (
		<PlacesAutocomplete value={address} onChange={updateAddress} onSelect={handleSelect}>
			{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
				<div>
					<TextInput
						{...getInputProps({
							placeholder: "Search Places ...",
							className: "location-search-input",
						})}
						id="location"
						name="location"
					/>
					<div className="autocomplete-dropdown-container">
						{loading && <div>Loading...</div>}
						{suggestions.map((suggestion) => {
							const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
							// inline style for demonstration purpose
							const style = suggestion.active
								? { backgroundColor: "#fafafa", cursor: "pointer" }
								: { backgroundColor: "#ffffff", cursor: "pointer" };
							return (
								<div
									key={suggestion.placeId}
									{...getSuggestionItemProps(suggestion, {
										className,
										style,
									})}>
									<span>{suggestion.description}</span>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</PlacesAutocomplete>
	);
};

export default LocationInput;
