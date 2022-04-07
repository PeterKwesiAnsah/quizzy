import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchAsync } from "./lib";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Hello world!</h1>
    </div>
  );
}

export default App;
