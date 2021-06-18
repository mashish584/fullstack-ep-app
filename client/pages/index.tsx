import { useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "../utils";

const index = (props) => {
	const router = useRouter();

	useEffect(() => {
		const { accessToken } = parseCookies();
		const route = accessToken ? "/home" : "/signin";
		router.push(route);
	}, []);

	return null;
};

export default index;
