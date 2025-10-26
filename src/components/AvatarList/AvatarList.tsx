import React from "react";
import "./AvatarList.scss";
import Avatar, { type AvatarListType } from "../Avatar/Avatar";

interface AvatarListProps {
	users: AvatarListType[];
	count: number;
}

const AvatarList: React.FC<AvatarListProps> = ({ users, count = 0 }) => {
	return (
		<div className={`avatar-list`}>
			{users.map((user, i) => (
				<div
					key={i}
					className={`avatar-list-item ${user.shape == "square" ? `square` : user.shape == "rounded" ? `rounded` : `circ`}`}
					style={{ zIndex: users.length - i }}
				>
					{/* Перечисление всего объекта */}
					<Avatar {...user} />
				</div>
			))}
		</div>
	);
};

export default AvatarList;
