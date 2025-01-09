import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreatePostForm from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CreatePostForm />
    </>
  );
}

export default App;
