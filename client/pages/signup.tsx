import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import AuthLayout from "../components/Auth/AuthLayout";
import AuthInfo from "../components/Auth/AuthInfo";
import Content from "../components/Auth/Content";
import Button from "../components/Button";
import Error from "../components/Error";

import { InputContainer, TextInput } from "../styles/form.style";

import { AuthFormContainer } from "../styles/auth.style";
import { handleAsync } from "../utils";

const SIGNUP_MUTATION = gql`
	mutation createUser($username: String!, $email: String!, $password: String!) {
		createUser(data: { username: $username, email: $email, password: $password }) {
			message
		}
	}
`;

const signupValidationSchema = Yup.object().shape({
	username: Yup.string().min(5, "Username must be 5 characters long.").required("Please enter username."),
	email: Yup.string().email("Please enter a valid email address.").required("Please enter email address."),
	password: Yup.string().min(7, "Password must be 7 characters long.").required("Please enter password."),
});

export default function signup() {
	const [onSignUp, { loading }] = useMutation(SIGNUP_MUTATION);

	const { errors, touched, ...formik } = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		validationSchema: signupValidationSchema,
		onSubmit: handleAsync(async (values) => {
			const { data } = await onSignUp({ variables: { ...values } });
			if (data.createUser) {
				toast.success(data.createUser.message);
				formik.resetForm();
			}
		}),
	});

	return (
		<AuthLayout content={<Content />}>
			<AuthFormContainer
				onSubmit={(e) => {
					e.preventDefault();
					formik.handleSubmit();
				}}>
				<AuthInfo heading={"Create your account"} text={"Already have an account?"} linkText={"Signin."} link={"/signin"} />
				<InputContainer mb={21}>
					<label htmlFor="username">Username</label>
					<TextInput type="text" name="username" id="username" onChange={formik.handleChange} value={formik.values.username} />
					{errors.username && touched.username ? <Error message={errors.username} /> : null}
				</InputContainer>
				<InputContainer mb={21}>
					<label htmlFor="email">Email</label>
					<TextInput type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
					{errors.email && touched.email ? <Error message={errors.email} /> : null}
				</InputContainer>
				<InputContainer mb={21}>
					<label htmlFor="password">Password</label>
					<TextInput type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} />
					{errors.password && touched.password ? <Error message={errors.password} /> : null}
				</InputContainer>
				<Button type="submit" isLoading={loading}>
					Sign Up
				</Button>
			</AuthFormContainer>
		</AuthLayout>
	);
}
