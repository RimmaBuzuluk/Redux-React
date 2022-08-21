import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { actions } from "./store/index";
import "./App.css";
function App() {
  const counter = useSelector((state) => state.counter);
  const distpatch = useDispatch();
  const increment = () => {
    distpatch(actions.increment());
  };
  const decrement = () => {
    distpatch(actions.decrement());
  };
  const addBy = () => {
    distpatch(actions.addBy(10));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
