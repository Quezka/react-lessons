import React, { useEffect, useState, type ChangeEvent, type CSSProperties, type ProgressHTMLAttributes } from "react";
import "./ProgressBar.scss";

interface ProgressProps {
	label?: boolean;
	colour?: "primary" | "inherit" | "secondary";
}

const ProgressBar: React.FC<ProgressProps> = ({ label = true, colour = "primary" }) => {
	const [value, changeValue] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			changeValue((prev) => {
				if (prev >= 100) {
					clearInterval(timer);
					return 100;
				}
				return prev + 1;
			});
		}, 100);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className={`progressBar-container`}>
			<progress id="progressBar" className={`progressBar ${colour}`} max="100" defaultValue="0" value={value}></progress>
			{label && <label htmlFor="progressBar">{value}%</label>}
		</div>
	);
};

export default ProgressBar;
