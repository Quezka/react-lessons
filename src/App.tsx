import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Link from "./components/Link/Link";
import Avatar from "./components/Avatar/Avatar";

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
			<Avatar size="small" img="" username="Arseniy Domashenko" isOnline></Avatar>
		</>
	);
}

export default App;
