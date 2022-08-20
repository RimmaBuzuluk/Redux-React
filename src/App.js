import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const distpatch = useDispatch();
  const increment = () => {
    distpatch({ type: "INC" });
  };
  const decrement = () => {
    distpatch({ type: "DEC" });
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
