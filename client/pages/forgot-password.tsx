import React from "react";
import { useFormik } from "formik";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import AuthLayout from "../components/Auth/AuthLayout";
import AuthInfo from "../components/Auth/AuthInfo";
import Button from "../components/Button";
import Error from "../components/Error";

import { AuthFormContainer } from "../styles/auth.style";
import { InputContainer, TextInput } from "../styles/form.style";

const FORGOT_PASSWORD_MUTATION = gql`
	mutation forgotPassword($email: String!) {
		forgotPassword(email: $email) {
			success
		}
	}
`;

export default function forgotPassword() {
	const [onForgotPasswordRequest, { loading }] = useMutation(FORGOT_PASSWORD_MUTATION);
	const { touched, errors, ...formik } = useFormik({
		initialValues: {
			email: "",
		},
		onSubmit: async ({ email }) => {
			const { data } = await onForgotPasswordRequest({ variables: { email } });

			if (data.forgotPassword) {
				toast.success("An email has been sent to you for forgot password request.Please check your email account.");
				formik.resetForm();
				return;
			}
		},
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
					<label htmlFor="email">Email</label>
					<TextInput type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
					{errors.email && touched.email ? <Error message={errors.email} /> : null}
				</InputContainer>
				<Button type="submit" isLoading={loading} style={{ margin: "21px 0" }}>
					Submit
				</Button>
			</AuthFormContainer>
		</AuthLayout>
	);
}
