import React, { useEffect, useState } from "react";
import "./Avatar.scss";

interface AvatarProps {
	isOnline?: boolean;
	shape?: "circ" | "rounded" | "square";
	size: "large" | "big" | "medium" | "small";
	img?: string;
	username?: string;
}

type AvatarListType = AvatarProps;

const Avatar: React.FC<AvatarProps> = ({ isOnline = false, shape = "circ", size, img, username }) => {
	const [initials, setInitials] = useState("");

	useEffect(() => {
		if (username && username.split(" ").length == 2) {
			setInitials(username?.split(" ")[0][0] + username?.split(" ")[1][0]);
		}
	});
	return (
		<div className={`avatar ${shape} ${size} online=${isOnline}`}>
			{img && <img src={img} alt="User Avatar"></img>}
			{username && <span className="username">{initials}</span>}
			{isOnline && <div className="online-badge"></div>}
			{!username && !img && (
				<svg className="avatar-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
					<path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#000000" />
					<path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#000000" />
				</svg>
			)}
		</div>
	);
};

export default Avatar;
export type { AvatarListType };
