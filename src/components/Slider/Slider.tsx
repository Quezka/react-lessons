import React from "react";
import "./Slider.scss";

interface RangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
	minValue: number;
	maxValue: number;
	defaultValue?: number;
	orientation: "horizontal" | "vertical";
	colour?: "primary" | "secondary";
	isDisabled?: boolean;
	rangeSize?: "medium" | "small";
	label?: string;
	step?: number;
}

const Slider: React.FC<RangeProps> = ({
	minValue,
	maxValue,
	defaultValue = (minValue + maxValue) / 2,
	colour = "primary",
	rangeSize = "medium",
	isDisabled = false,
	label = "Default",
	step = 1,
}) => {
	return (
		<div className={`slider-container ${colour} ${rangeSize} ${isDisabled}`}>
			<label className="range-label" htmlFor="slider">
				{label}
			</label>
			<input className="slider" id="slider" type="range" min={minValue} max={maxValue} value={defaultValue} step={step}></input>
		</div>
	);
};

export default Slider;
