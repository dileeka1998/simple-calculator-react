import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    // added the code for the minus function 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    // added the code for the times function 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    // added the code for the divide function
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  function resetInput(e) {
    // added the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = 0;
  };

  function resetResult(e) {
    // added the code for the resetResult function 
    e.preventDefault();
    setResult((preVal) => preVal * 0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {/* added the value of the current total */}
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        {/* Added the subtract button */}
        <button onClick={minus}>subtract</button>
        {/* Added the multiply button */}
        <button onClick={times}>multiply</button>
        {/* Added the divide button */}
        <button onClick={divide}>divide</button>
        {/* Added the resetInput button */}
        <button onClick={resetInput}>reset input</button>
        {/* Added the resetResult button */}
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App; 