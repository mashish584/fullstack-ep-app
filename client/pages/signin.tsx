import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import AuthLayout from "../components/AuthLayout";
import { AuthFormContainer } from "../styles/auth.style";
import { InputContainer, TextInput } from "../styles/form.style";

const Content = () => (
	<div id="content">
		<h2>Find</h2>
		<h2>Amazing Events</h2>
		<p>
			Looking for an event <br /> to be a part of. Join us now...
		</p>
	</div>
);

export default function signin() {
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
			<h3>Welcome back to EP</h3>
			<p>
				New here?{" "}
				<Link href="/signup">
					<a>Create an account.</a>
				</Link>
				<AuthFormContainer>
					<InputContainer>
						<TextInput />
					</InputContainer>
				</AuthFormContainer>
			</p>
		</AuthLayout>
	);
}
