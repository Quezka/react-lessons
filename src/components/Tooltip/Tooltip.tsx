import React, { useState } from "react";
import Loader from "../Loader/Loader";
import "./Tooltip.scss";

interface TooltipProps {
	direction?: "none" | "up" | "right" | "down" | "left";
	text: string;
	children: React.ReactNode;
	width?: number;
}

const Tooltip: React.FC<TooltipProps> = ({ direction = "none", text, children, width = 200 }) => {
	const [visible, setVisible] = useState(false);

	return (
		<div
			className={`tooltip-wrapper`}
			onMouseEnter={() => {
				setVisible(true);
			}}
			onMouseLeave={() => {
				setVisible(false);
			}}
		>
			{children}
			<div className={`tooltip ${direction} ${visible ? "visible" : ""}`} style={{ maxWidth: `${width}px` }}>
				{text}
				{direction != "none" && <div className="tooltipArrow"></div>}
			</div>
		</div>
	);
};

export default Tooltip;
