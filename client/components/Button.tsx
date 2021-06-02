import React from "react";
import { Button as ButtonContainer } from "../styles/form.style";
import { buttonStyleProps } from "../styles/types";
import Loader from "./Loader";

interface ButtonProps extends buttonStyleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
	return (
		<ButtonContainer {...props} ref={ref}>
			{props.isLoading ? <Loader /> : children}
		</ButtonContainer>
	);
});

export default Button;
