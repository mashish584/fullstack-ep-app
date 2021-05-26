import React from "react";
import { useFormik } from "formik";
import AuthLayout from "../components/Auth/AuthLayout";
import { AuthFormContainer } from "../styles/auth.style";
import { Button, InputContainer, TextInput } from "../styles/form.style";
import AuthInfo from "../components/Auth/AuthInfo";
import Content from "../components/Auth/Content";

export default function forgotPassword() {
	const {} = useFormik({
		initialValues: {
			email: "",
		},
		onSubmit: (values) => {},
	});

	return (
		<AuthLayout content={<Content />}>
			<AuthFormContainer>
				<AuthInfo
					heading={"Forgot your password"}
					text={"Provide your registered email address. We will send a temporary password for you."}
				/>
				<InputContainer mb={21}>
					<label>Email</label>
					<TextInput />
				</InputContainer>
				<Button>Submit</Button>
			</AuthFormContainer>
		</AuthLayout>
	);
}
