import { useState } from "react";
import "./App.css";
import Button, { type ButtonListType } from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Link from "./components/Link/Link";
import Avatar, { type AvatarListType } from "./components/Avatar/Avatar";
import Tooltip from "./components/Tooltip/Tooltip";
import AvatarList from "./components/AvatarList/AvatarList";
import ButtonList from "./components/ButtonList/ButtonList";
import Input from "./components/Input/Input";
import Slider from "./components/Slider/Slider";
import BottomNav from "./components/BottomNavigation/BottomNav";
import ProgressBar from "./components/ProgressBar/ProgressBar";

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
			<ProgressBar />
			<BottomNav label="Label"></BottomNav>
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
			<div className="tooltip-div">
				<Tooltip text="Tooltip down Tooltip down Tooltip down" direction="down">
					<div className="testDiv2"></div>
				</Tooltip>
				<Tooltip direction="up" text="Tooltip up Tooltip up Tooltip up">
					<div className="testDiv2"></div>
				</Tooltip>
				<Tooltip direction="left" text="Tooltip left Tooltip left Tooltip left">
					<div className="testDiv2"></div>
				</Tooltip>
				<Tooltip direction="right" text="Tooltip right Tooltip right Tooltip right">
					<div className="testDiv2"></div>
				</Tooltip>
				<Tooltip text="Tooltip none Tooltip none Tooltip none">
					<div className="testDiv2"></div>
				</Tooltip>

				<Tooltip text="Tooltip Tooltip Tooltip Tooltip" direction="up">
					<div className="testDiv3"></div>
				</Tooltip>
			</div>
			<Input placeholder="Value" inputSize="small" inputStyle="outlined" label="Label"></Input>
			<Avatar size="small" img="" username="Arseniy Domashenko" isOnline isClickable></Avatar>
			<AvatarList users={avatarUsers} count={6}></AvatarList>
			<ButtonList buttons={buttonList} orientation="horizontal"></ButtonList>
			<div className="slider-module">
				<Slider minValue={0} maxValue={100} orientation="horizontal"></Slider>
			</div>
		</>
	);
}

export default App;
