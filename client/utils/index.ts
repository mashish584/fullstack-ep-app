import cookie from "cookie";
import { toast } from "react-toastify";
import { cookieType } from "../types";

export const handleAsync =
	(fn: Function) =>
		(...args) =>
			fn(...args).catch((err) => {
				console.log({ err });
				const error: string = err.message || err.networkError || "Something went wrong.Please try again!!!";
				toast.error(error);
			});

export const parseCookies = (req = null): cookieType => {
	return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
};
