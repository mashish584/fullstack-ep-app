import React, { ReactNode } from "react";

import { Container, Section } from "../../styles/auth.style";
import { BackgroundImage, Layer } from "../../styles/layout.style";

interface AuthLayoutProps {
	content?: ReactNode;
	children?: ReactNode;
}

const AuthLayout = ({ content, children }: AuthLayoutProps) => {
	return (
		<Container>
			<Section flex={0.65}>
				<BackgroundImage src="https://ik.imagekit.io/imashish/ep/header-bg.4e3846cb_ryL2z_mqN.jpg" />
				<Layer opacity={0.9} />
				{content}
			</Section>
			<Section className="form__section">{children}</Section>
		</Container>
	);
};

export default AuthLayout;
