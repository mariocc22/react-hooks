import { useState, useMemo } from "react";

export default function HookUseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // this will not recall this super slow function if the number hasn't changed, so if you
  // changed the themed it won't trigger this function, until you change the number.
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("Calling Slow Function");
  for (let i = 0; i <= 200; i++) {}
  return num * 2;
}
