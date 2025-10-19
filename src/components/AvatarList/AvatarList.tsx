import React from "react";
import "./AvatarList.scss";
import Avatar, { type AvatarListType } from "../Avatar/Avatar";

interface AvatarListProps {
	users: AvatarListType[];
}

const AvatarList: React.FC<AvatarListProps> = ({ users }) => {
	return (
		<div className={`avatar-list`}>
			{users.map((user, i) => (
				<div key={i} className={`avatar-list-item${i}`}>
					{/* Перечисление всего объекта */}
					<Avatar {...user} />
				</div>
			))}
		</div>
	);
};

export default AvatarList;
