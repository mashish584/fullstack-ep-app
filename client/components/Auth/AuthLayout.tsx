import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container, Section } from "../../styles/auth.style";
import { BackgroundImage, Layer } from "../../styles/layout.style";
import { lightTheme } from "../../utils/theme";

const AuthLayout = ({ children }) => {
	const theme = useContext<typeof lightTheme>(ThemeContext);

	return (
		<Container>
			<Section className="form__section" flex={1}>
				{children}
			</Section>
			{/* <Section></Section> */}
			<BackgroundImage src="https://ik.imagekit.io/imashish/ep/header-bg.4e3846cb_ryL2z_mqN.jpg" />
			<Layer bg={theme.colors.white} opacity={0.96} />
		</Container>
	);
};

export default AuthLayout;
