import React, { useEffect, useState, type ChangeEvent, type CSSProperties } from "react";
import "./Slider.scss";

interface RangeProps {
	onChange?: (defaultValue: number) => void;
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
	onChange,
	minValue,
	maxValue,
	defaultValue = (minValue + maxValue) / 2,
	colour = "primary",
	rangeSize = "medium",
	isDisabled = false,
	label = "Default",
	step = 1,
	orientation,
}) => {
	const [currentValue, setCurrentValue] = useState<number>(defaultValue);
	// not in use useEffect(() => {}, [currentValue]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (isDisabled) return;

		const newValue: number = Number(event.target.value);

		setCurrentValue(newValue);
	};

	const getSliderProgress = (): number => {
		return ((currentValue - minValue) / (maxValue - minValue)) * 100;
	};

	const fillSlider: CSSProperties = orientation === "horizontal" ? { width: `${getSliderProgress()}%` } : { height: `${getSliderProgress()}%` };

	return (
		<div className={`slider-container ${colour} ${rangeSize} ${isDisabled}`}>
			<label className="range-label" htmlFor="slider">
				Current Value: {currentValue}
			</label>
			<div className={`slider-wrapper`}>
				<div className="slider-fill" style={fillSlider}></div>
				<input
					onChange={handleChange}
					className="slider"
					id="slider"
					type="range"
					min={minValue}
					max={maxValue}
					defaultValue={defaultValue}
					step={step}
					value={currentValue}
				></input>
			</div>
			<div className={`slider-limitvalues`}>
				<span>{minValue}</span>
				<span>{maxValue}</span>
			</div>
		</div>
	);
};

export default Slider;
