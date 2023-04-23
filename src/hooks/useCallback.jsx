import { useState, useCallback } from "react";
import List from "./useCallbackList";

export default function HookUseCallBack() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // this works just like useMemo, but the big difference is that it returns a FUNCTION
  // so you can use it, and even pass it parameters to change its behavior, just like now, I pass it
  // a "num" parameter to sum it to the actual number
  const getItems = useCallback(
    (increment) => {
      return [number, number + increment, number + increment + 1];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <h1>useCallback hook</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
}
