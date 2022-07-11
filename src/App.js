import React, { useState } from "react";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function updateCount(num) {
    setCount(count + num);
  }

  return (
    <div className="App">
      <h1>Total Counts: {count}</h1>
      <Counter updateCount={updateCount} />
      <Counter updateCount={updateCount} />
      <Counter updateCount={updateCount} />
      <Counter updateCount={updateCount} />
    </div>
  );
}
