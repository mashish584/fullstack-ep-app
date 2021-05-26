import React from "react";
import { useFormik } from "formik";
import AuthLayout from "../components/Auth/AuthLayout";
import { AuthFormContainer } from "../styles/auth.style";
import { Button, InputContainer, TextInput } from "../styles/form.style";
import AuthInfo from "../components/Auth/AuthInfo";
import Content from "../components/Auth/Content";

export default function signup() {
	const {} = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		onSubmit: (values) => {},
	});

	return (
		<AuthLayout content={<Content />}>
			<AuthFormContainer>
				<AuthInfo heading={"Create your account"} text={"Already have an account?"} linkText={"Signin."} link={"/signin"} />
				<InputContainer mb={21}>
					<label>Username</label>
					<TextInput />
				</InputContainer>
				<InputContainer mb={21}>
					<label>Email</label>
					<TextInput />
				</InputContainer>
				<InputContainer mb={21}>
					<label>Password</label>
					<TextInput />
				</InputContainer>
				<Button>Sign Up</Button>
			</AuthFormContainer>
		</AuthLayout>
	);
}
