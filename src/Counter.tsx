import React, { useState } from "react";

export default function Counter({ app }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{border: "2px solid #aeaeff", padding: "8px", borderRadius: "8px"}}>
      <div>Name: {app.name}</div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Add to count
        </button>
      </div>
    </div>
  )
}