import React, { useState } from "react";
import "./styles.css";

export default function Counter(props) {
  const { updateCount } = props;
  const [count, setCount] = useState(0);

  return (
    <div className="countBox">
      <h1>Individual Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      <button
        onClick={() => {
          updateCount(count);
          setCount(0);
        }}
      >
        Add to Total
      </button>
    </div>
  );
}
