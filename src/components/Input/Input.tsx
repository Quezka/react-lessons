import React from "react";
import "./Input.scss";

interface InputProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	isDisabled?: boolean;
	isError?: boolean;
	inputStyle: "standard" | "filled" | "outlined";
	size?: "medium" | "small";
	label: string;
}

const Input: React.FC<InputProps> = ({ placeholder, isDisabled = false, isError = false, inputStyle, size = "medium", type = "text", label }) => {
	return (
		<div className={`input-container ${isDisabled} ${isError} ${inputStyle}`}>
			<label className="label" htmlFor="input">
				{label}
			</label>
			<input className={`input ${size}`} type={type} id="input" placeholder={placeholder}></input>
		</div>
	);
};

export default Input;
