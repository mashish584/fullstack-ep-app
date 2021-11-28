import cookie from "cookie";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { cookieType, dateFormatTypes } from "../types";

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

export function debounce(fn: Function, delay: number) {
	let timer = null;
	return function () {
		const args = arguments;
		if (timer) clearTimeout(timer);
		timer = setTimeout(function () {
			fn.apply(this, args);
		}, delay);
	};
}

export const handleFileReader = (file: File) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = function () {
			resolve(reader.result);
		};
		reader.onerror = function () {
			reject("Error while reading the file");
		};
	});
};

export const handleImage = (base64: string): Promise<HTMLImageElement> => {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.src = base64;
		image.onload = function () {
			resolve(image);
		};

		image.onerror = function () {
			reject("Error while reading the image");
		};
	});
};

export const formatTimestamp = (timestamp: string, format: dateFormatTypes) => dayjs(timestamp).format(format);
