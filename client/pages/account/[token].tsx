import { useEffect } from "react";
import Router from "next/router";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { handleAsync } from "../../utils";

const VERIFY_EMAIL_MUTATION = gql`
	mutation verifyUserEmail($username: String!, $token: String!) {
		verifyUserEmail(username: $username, token: $token) {
			success
		}
	}
`;

const VerifyEmail = () => {
	const [onEmailVerify] = useMutation(VERIFY_EMAIL_MUTATION);

	const verifyEmail = handleAsync(async () => {
		const { user, token } = Router.router.query;

		const throwUserOut = () => {
			toast.error("Token is invalid.");
			Router.push("/signin");
		};

		if (!user || !token) {
			throwUserOut();
			return;
		}

		const { data } = await onEmailVerify({ variables: { username: user, token: token } });
		if (data.verifyUserEmail.success) {
			toast.success("Email verified.Please login to continue.");
			Router.push("/signin");
		} else {
			throwUserOut();
			return;
		}
	});

	useEffect(() => {
		verifyEmail();
	}, []);

	return null;
};

export default VerifyEmail;
