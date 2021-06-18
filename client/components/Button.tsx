import React from "react";
import { Button as ButtonContainer } from "../styles/form.style";
import { buttonStyleProps } from "../styles/types";
import Loader from "./Loader";

interface ButtonProps extends buttonStyleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return <ButtonContainer {...props}>{props.isLoading ? <Loader /> : children}</ButtonContainer>;
};

export default Button;
