import React from "react";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { gql, useMutation } from "@apollo/client";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

import AuthLayout from "../components/Auth/AuthLayout";
import AuthInfo from "../components/Auth/AuthInfo";
import Button from "../components/Button";
import Error from "../components/Error";
import LinkText from "../components/LinkText";

import { handleAsync } from "../utils";
import withAuth from "../hoc/withAuth";

import { AuthFormContainer } from "../styles/auth.style";
import { InputContainer, TextInput } from "../styles/form.style";

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
	username: Yup.string().required("Please enter username."),
	password: Yup.string().required("Please enter password."),
});

const signin = ({ data }) => {
	const router = useRouter();
	const [cookie, setCookie] = useCookies(["accessToken"]);
	const [onSignIn, { loading }] = useMutation(SIGNIN_MUTATION);

	console.log({ cookie });

	const { errors, touched, ...formik } = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: signInValidationSChema,
		onSubmit: handleAsync(async (values) => {
			const { data } = await onSignIn({ variables: { id: values.username, password: values.password } });
			if (data.userLogin) {
				setCookie("accessToken", data.userLogin.token, {
					path: "/",
					maxAge: 3600,
					sameSite: true,
				});
				router.push("/home");
			}
		}),
	});

	return (
		<AuthLayout>
			<AuthFormContainer
				onSubmit={(e) => {
					e.preventDefault();
					formik.handleSubmit();
				}}>
				<AuthInfo heading={"Event Planner"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."} />
				<InputContainer mb={21}>
					<label htmlFor="username">Username</label>
					<TextInput type="text" id="username" name="username" onChange={formik.handleChange} value={formik.values.username} />
					{errors.username && touched.username ? <Error message={errors.username} /> : null}
				</InputContainer>
				<InputContainer mb={21}>
					<label htmlFor="password">Password</label>
					<TextInput type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
					{errors.password && touched.password ? <Error message={errors.password} /> : null}
				</InputContainer>
				<Link href="/forgot-password">
					<a className="forgot__link">Forgot Password?</a>
				</Link>
				<Button type="submit" isLoading={loading} style={{ marginBottom: "21px" }}>
					Sign In
				</Button>
				<LinkText text={"Don't have an account yet?"} link={"/signup"} linkText={"Sign Up"} />
			</AuthFormContainer>
		</AuthLayout>
	);
};

export default withAuth(signin);
