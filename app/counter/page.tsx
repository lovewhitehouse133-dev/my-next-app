// app/counter/page.tsx
"use client";
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </main>
  );
}
