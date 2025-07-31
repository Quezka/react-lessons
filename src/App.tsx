import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert("Button clicked!");
    console.log("Button clicked!");
  };

  return (
    <>
      <Button size="small" color="primary" style="contained">
        Label
      </Button>
      <Button size="medium" color="primary" style="outlined">
        Label
      </Button>
      <Button size="large" color="primary" style="text">
        Label
      </Button>
    </>
  );
}

export default App;
