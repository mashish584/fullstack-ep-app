import React from "react";
import Link from "next/link";

interface AuthInfoProps {
	heading: string;
	text: string;
	link?: string;
	linkText?: string;
}

const AuthInfo = ({ heading, text, link, linkText }: AuthInfoProps) => {
	return (
		<div className="auth__info">
			<h3>{heading}</h3>
			<p>
				{text}{" "}
				{linkText ? (
					<Link href={link}>
						<a>{linkText}</a>
					</Link>
				) : null}
			</p>
		</div>
	);
};

export default AuthInfo;
