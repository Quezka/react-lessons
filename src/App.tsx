import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Link from "./components/Link/Link";
import Avatar from "./components/Avatar/Avatar";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		alert("Button clicked!");
		console.log("Button clicked!");
	};

	return (
		<>
			<Button size="large" color="secondary" style="contained" isLoading>
				Contained Small
			</Button>
			<br></br>
			<br></br>
			<Button size="large" color="secondary" style="outlined" isLoading>
				Outlined Medium
			</Button>
			<br></br>
			<br></br>
			<Button size="large" color="secondary" style="text" isLoading>
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
			<Avatar size="small" img="" username="Arseniy Domashenko" isOnline></Avatar>
		</>
	);
}

export default App;
