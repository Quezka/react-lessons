import { useState } from "react";
import "./App.css";
import Button, { type ButtonListType } from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Link from "./components/Link/Link";
import Avatar, { type AvatarListType } from "./components/Avatar/Avatar";
import Tooltip from "./components/Tooltip/Tooltip";
import AvatarList from "./components/AvatarList/AvatarList";
import ButtonList from "./components/ButtonList/ButtonList";

function App() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		alert("Button clicked!");
		console.log("Button clicked!");
	};

	const avatarUsers: AvatarListType[] = [
		{
			isOnline: true,
			size: "medium",
			username: "Arseniy Domashenko",
		},
		{
			isOnline: true,
			size: "medium",
			shape: "circ",
			username: "Lucrezia Ursini",
		},
		{
			isOnline: true,
			size: "medium",
		},
		{
			isOnline: true,
			size: "medium",
			shape: "circ",
			username: "Gioia Ursini",
		},
		{
			isOnline: false,
			size: "medium",
		},
		{
			isOnline: true,
			size: "medium",
			shape: "circ",
			username: "Ludovica Ursini",
		},
		{
			isOnline: true,
			size: "medium",
		},
	];

	const buttonList: ButtonListType[] = [
		{
			size: "medium",
			color: "secondary",
			buttonType: "contained",
			isDisabled: false,
			isLoading: false,
			children: "Test 1",
		},
		{
			size: "medium",
			color: "secondary",
			buttonType: "contained",
			isDisabled: false,
			isLoading: false,
			children: "Test List 2",
		},
		{
			size: "medium",
			color: "secondary",
			buttonType: "contained",
			isDisabled: false,
			isLoading: false,
			children: "Test List 2",
		},
		{
			size: "medium",
			color: "secondary",
			buttonType: "contained",
			isDisabled: false,
			isLoading: false,
			children: "Test List 2",
		},
		{
			size: "medium",
			color: "secondary",
			buttonType: "contained",
			isDisabled: false,
			isLoading: false,
			children: "Test List 3",
		},
	];
	return (
		<>
			<Button size="large" color="secondary" buttonType="contained" isLoading>
				Contained Small
			</Button>
			<br></br>
			<br></br>
			<Button size="large" color="secondary" buttonType="outlined" isLoading>
				Outlined Medium
			</Button>
			<br></br>
			<br></br>
			<Button size="large" color="secondary" buttonType="text" isLoading>
				Text Large
			</Button>
			<Link href="https://facebook.com/">Link</Link>
			<div className="testDiv">
				<Tooltip text="Tooltip down" direction="down" />
			</div>
			<div className="testDiv2">
				<Tooltip direction="up" text="Tooltip up" />
			</div>
			<div className="testDiv2">
				<Tooltip direction="left" text="Tooltip left" />
			</div>
			<div className="testDiv2">
				<Tooltip direction="right" text="Tooltip right" />
			</div>
			<div className="testDiv2">
				<Tooltip text="Tooltip none" />
			</div>
			<Avatar size="small" img="" username="Arseniy Domashenko" isOnline isClickable></Avatar>
			<AvatarList users={avatarUsers} count={6}></AvatarList>
			<ButtonList buttons={buttonList} orientation="vertical"></ButtonList>
		</>
	);
}

export default App;
