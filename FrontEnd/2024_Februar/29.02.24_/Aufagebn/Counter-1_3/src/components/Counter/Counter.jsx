import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <section className="counter">
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </section>
      <div className="reset">
        <button onClick={() => setCounter(0)}>reset</button>
      </div>
    </>
  );
};

export default Counter;
