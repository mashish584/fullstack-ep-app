import React from "react";

export type SkeltonElementProps = {
	type: "text" | "heading" | "thumbnail" | "avatar" | "button";
	width?: number | string;
	height?: number | string;
	mt?: number | string;
	color?: string;
};

const SkeltonElement: React.FC<SkeltonElementProps> = ({ type, ...props }) => {
	const className = `skelton ${type}`;
	const styles: React.CSSProperties = {};

	if (props.width) {
		styles.width = props.width;
	}

	if (props.height) {
		styles.height = props.height;
	}

	if (props.mt) {
		styles.marginTop = props.mt;
	}

	if (props.color) {
		styles.backgroundColor = props.color;
	}

	return <div className={className} style={styles} />;
};

export default SkeltonElement;
