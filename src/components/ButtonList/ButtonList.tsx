import React from "react";
import "./ButtonList.scss";
import Button, { type ButtonListType } from "../Button/Button";

interface ButtonListProps {
	buttons: ButtonListType[];
	orientation?: "horizontal" | "vertical";
}

const ButtonList: React.FC<ButtonListProps> = ({ buttons, orientation = `vertical` }) => {
	return (
		<div className={`button-list ${orientation}`}>
			{buttons.map((button, i) => (
				<div style={{ width: `100%` }} key={i} className={`button-list-item ${button.buttonType != undefined ? `` : button.buttonType}`}>
					<Button {...button} style={{ width: `100%` }} />
				</div>
			))}
		</div>
	);
};

export default ButtonList;
