import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import AuthLayout from "../components/Auth/AuthLayout";
import { AuthFormContainer } from "../styles/auth.style";
import { Button, InputContainer, TextInput } from "../styles/form.style";
import AuthInfo from "../components/Auth/AuthInfo";
import Content from "../components/Auth/Content";

export default function signin() {
	const {} = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		onSubmit: (values) => {},
	});

	return (
		<AuthLayout content={<Content />}>
			<AuthFormContainer>
				<AuthInfo heading={"Welcome back to EP"} text={"New here?"} linkText={"Create an account."} link={"/signup"} />
				<InputContainer mb={21}>
					<label>Username</label>
					<TextInput />
				</InputContainer>
				<InputContainer mb={21}>
					<label>Password</label>
					<TextInput />
				</InputContainer>
				<Link href="/forgot-password">
					<a className="forgot__link">Forgot your password?</a>
				</Link>
				<Button>Sign In</Button>
			</AuthFormContainer>
		</AuthLayout>
	);
}
