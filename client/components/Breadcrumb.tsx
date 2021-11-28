import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link";

import { BreadCrumbContainer } from "../styles/breadcrumb.style";

const BreadCrumb = () => {
	const [paths, setPaths] = useState([]);
	const { asPath } = useRouter();

	useEffect(() => {
		const paths = asPath.split("/");
		paths.shift();
		setPaths(paths);
	}, []);

	return (
		<BreadCrumbContainer>
			{paths.map((path, index) => {
				return (
					<>
						<Link href="">
							<a>{path}</a>
						</Link>
						{index !== paths.length - 1 && <FontAwesomeIcon icon={"angle-right"} width={14} height={8} />}
					</>
				);
			})}
		</BreadCrumbContainer>
	);
};

export default BreadCrumb;
