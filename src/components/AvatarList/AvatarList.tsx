import React from "react";
import "./AvatarList.scss";
import Avatar, { type AvatarListType } from "../Avatar/Avatar";

interface AvatarListProps {
	users: AvatarListType[];
	count: number;
}

const AvatarList: React.FC<AvatarListProps> = ({ users, count }) => {
	return (
		<div className={`avatar-list`}>
			{users.map((user, i) => (
				<div
					key={i}
					className={`avatar-list-item ${user.shape == "square" ? `square` : user.shape == "rounded" ? `rounded` : `circ`}`}
					style={{ zIndex: users.length - i }}
				>
					{/* Перечисление всего объекта */}
					{count == 0 && <Avatar {...user} />}
					{i + 1 < count && <Avatar {...user} />}
					{i + 1 == count && (
						<Avatar
							username={`+ ${users.length - count}`}
							size={`${user.size}`}
							shape={`${user.shape == "square" ? `square` : user.shape == "rounded" ? `rounded` : `circ`}`}
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default AvatarList;
