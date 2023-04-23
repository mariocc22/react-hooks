import { useState, useEffect, useRef } from "react";

export default function HookUseRef() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  function focus() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }

  return (
    <div>
      <h1>useRef hook</h1>
      {/* Using useRef to see how the value changes without rerending */}
      {/* Using useRef to store the previous value and useEffect to store that value each time the name changes */}
      <div>
        <input
          ref={inputRef}
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          My name is {name} and uses to be {prevName.current}{" "}
        </div>
        <button onClick={focus}>FOCUS</button>
      </div>
    </div>
  );
}
