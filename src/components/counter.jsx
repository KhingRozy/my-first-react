import React, { useState } from "react";
import "../styles/counter.css";

function Counter() {
  // state to store the current count
  const [count, setCount] = useState(0);

  //  function to increase to count
  const increment = () => {
    setCount(count + 1);
  };

  //   function to decrease to count
  const decrement = () => {
    // ensure count do not go below 0
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const styleNumber = count === 0 ? "zero" : "positive";

  return (
    <div>
      <h1>Counter App</h1>
      <div className="outcome">
        <button onClick={increment}>Increment</button>
        <p className={`count ${styleNumber}`}>{count === 0 ? "Zero" : count}</p>
        <button disabled={count === 0} onClick={decrement}>
          Decrement
        </button>
      </div>

      <div className="outcome">
        <button onClick={increment}>Increment</button>
        <p className={`count ${styleNumber}`}>{count === 0 ? "Zero" : count}</p>
        <button disabled={count === 0} onClick={decrement}>
          Decrement
        </button>
      </div>

      <div className="outcome">
        <button onClick={increment}>Increment</button>
        <p className={`count ${styleNumber}`}>{count === 0 ? "Zero" : count}</p>
        <button disabled={count === 0} onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
