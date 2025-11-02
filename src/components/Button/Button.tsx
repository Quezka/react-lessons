import React from "react";
import Loader from "../Loader/Loader";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: "small" | "medium" | "large";
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success" | "inherit" | "inherit(white)";
	buttonType?: "contained" | "outlined" | "text";
	isDisabled?: boolean;
	isLoading?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
}

type ButtonListType = ButtonProps;

const Button: React.FC<ButtonProps> = ({
	size = "medium",
	color = "primary",
	buttonType = "contained",
	isDisabled = false,
	isLoading = false,
	children,
	style,
	onClick,
}) => {
	return (
		<button style={style} className={`button ${size} ${color} ${buttonType}`} onClick={onClick} disabled={isDisabled}>
			{isLoading && <Loader size={16} />}
			{children}
		</button>
	);
};

export default Button;
export type { ButtonListType };
