import React from "react";
import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	isDisabled?: boolean;
	isError?: boolean;
	inputStyle: "standard" | "filled" | "outlined";
	inputSize?: "medium" | "small";
	label: string;
}

const Input: React.FC<InputProps> = ({ placeholder, isDisabled = false, isError = false, inputStyle, inputSize = "medium", type = "text", label }) => {
	return (
		<div className={`input-container ${isDisabled} ${isError} ${inputStyle}`}>
			<label className="label" htmlFor="input">
				{label}
			</label>
			<input className={`input ${inputSize}`} type={type} id="input" placeholder={placeholder}></input>
		</div>
	);
};

export default Input;
