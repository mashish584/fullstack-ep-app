import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { gql, useMutation } from "@apollo/client";
import * as Yup from "yup";
import { useCookies } from "react-cookie";

import AuthLayout from "../components/Auth/AuthLayout";
import { AuthFormContainer } from "../styles/auth.style";
import { Button, InputContainer, TextInput } from "../styles/form.style";
import AuthInfo from "../components/Auth/AuthInfo";
import Content from "../components/Auth/Content";

const SIGNIN_MUTATION = gql`
	mutation userLogin($id: String!, $password: String!) {
		userLogin(id: $id, password: $password) {
			token
			user {
				id
			}
		}
	}
`;

const signInValidationSChema = Yup.object().shape({
	username: Yup.string().required(),
	password: Yup.string().required(),
});

export default function signin() {
	const [onSignIn] = useMutation(SIGNIN_MUTATION);

	const { errors, touched, ...formik } = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: signInValidationSChema,
		onSubmit: async (values) => {
			try {
				const response = await onSignIn({ variables: { id: values.username, password: values.password } });
				if (response.data) {
				}
			} catch (err) {
				console.log({ err });
			}
		},
	});

	return (
		<AuthLayout content={<Content />}>
			<AuthFormContainer>
				<AuthInfo heading={"Welcome back to EP"} text={"New here?"} linkText={"Create an account."} link={"/signup"} />
				<InputContainer mb={21}>
					<label>Username</label>
					<TextInput type="text" id="username" name="username" onChange={formik.handleChange} value={formik.values.username} />
					{errors.username && touched.username ? <div>{errors.username}</div> : null}
				</InputContainer>
				<InputContainer mb={21}>
					<label>Password</label>
					<TextInput type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
					{errors.password && touched.password ? <div>{errors.password}</div> : null}
				</InputContainer>
				<Link href="/forgot-password">
					<a className="forgot__link">Forgot your password?</a>
				</Link>
				<Button onClick={formik.handleSubmit}>Sign In</Button>
			</AuthFormContainer>
		</AuthLayout>
	);
}
