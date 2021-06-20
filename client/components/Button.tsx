import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import { Button as ButtonContainer } from "../styles/form.style";
import { buttonStyleProps } from "../styles/types";
import Loader from "./Loader";

interface ButtonProps extends buttonStyleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
	showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	const renderChild = useCallback(() => {
		if (children) return children;

		if (props.title) {
			return (
				<div className="button__content">
					<span>{props.title}</span>
					{props.showArrow && <FontAwesomeIcon icon={faArrowRight} width={20} height={20} />}
				</div>
			);
		}
	}, [children, props.title]);

	return <ButtonContainer {...props}>{props.isLoading ? <Loader /> : renderChild()}</ButtonContainer>;
};

export default Button;
