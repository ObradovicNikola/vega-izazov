import { useMemo, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  console.log("Parent Render");

  const child = useMemo(() => <Child name="Child Component" />, []);

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleClick}>Increase Count</button>
      <h2>count: {count}</h2>
      {child}
    </div>
  );
}
