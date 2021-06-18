import { FormikErrors } from "formik";
import React from "react";

interface ErrorProps {
	message: string | string[] | FormikErrors<any> | FormikErrors<any>[];
}

const Error = (props: ErrorProps) => {
	return (
		<div className="error__message">
			<span>{props.message}</span>
		</div>
	);
};

export default Error;
