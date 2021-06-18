import React from "react";

import { Loader as LoaderContainer } from "../styles/layout.style";

const Loader = () => {
	return (
		<LoaderContainer>
			{new Array(5).fill(1).map((i, index) => (
				<div key={index} />
			))}
		</LoaderContainer>
	);
};

export default Loader;
