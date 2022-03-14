import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{border: "2px solid #aeaeff", padding: "8px", borderRadius: "8px"}}>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Add to count
        </button>
      </div>
    </div>
  )
}