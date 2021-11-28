import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal: React.FC = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted ? ReactDOM.createPortal(children, document.getElementById("portal")) : null;
};

export default Portal;
