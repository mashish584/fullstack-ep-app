import React from "react";
import Link from "next/link";

interface LinkTextProp {
	text: string;
	link?: string;
	linkText?: string;
}

const LinkText = ({ text, linkText, link }: LinkTextProp) => {
	return (
		<p className="link__text">
			{text}{" "}
			{link ? (
				<Link href={link}>
					<a>{linkText}</a>
				</Link>
			) : null}
		</p>
	);
};

export default LinkText;
