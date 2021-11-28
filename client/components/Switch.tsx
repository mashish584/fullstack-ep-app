import React from "react";
import { SwitchContainer } from "../styles/switch.style";

type switchTypes = {
	title: string;
	mb?: number;
	onChange: () => void;
	isOn: boolean;
};

const Switch: React.FC<switchTypes> = ({ mb, title, ...props }) => {
	return (
		<SwitchContainer mb={mb}>
			<label className="switch">
				<input type="checkbox" checked={props.isOn} onChange={props.onChange} />
				<span className="slider round"></span>
			</label>
			<span>{title}</span>
		</SwitchContainer>
	);
};

export default Switch;
