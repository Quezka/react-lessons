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
				<div style={{ width: `100%` }} key={i + `button`} className={`button-list-item ${button.buttonType != undefined ? `` : button.buttonType}`}>
					{i == 0 && orientation == "vertical" && <Button {...button} style={{ width: `100%` }} id="first-ver" />}
					{i == buttons.length - 1 && orientation == "vertical" && <Button {...button} style={{ width: `100%` }} id="last-ver" />}
					{i > 0 && i < buttons.length - 1 && orientation == "vertical" && <Button {...button} style={{ width: `100%` }} id="middle-ver" />}
					{i == 0 && orientation == "horizontal" && <Button {...button} style={{ width: `100%` }} id="first-hor" />}
					{i == buttons.length - 1 && orientation == "horizontal" && <Button {...button} style={{ width: `100%` }} id="last-hor" />}
					{i > 0 && i < buttons.length - 1 && orientation == "horizontal" && <Button {...button} style={{ width: `100%` }} id="middle-hor" />}
				</div>
			))}
		</div>
	);
};

export default ButtonList;
