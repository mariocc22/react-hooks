import { createRoot } from "react-dom/client";
import { useState, useEffect, useRef } from "react";

const App = () => {
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
      {/* Using useRef to see how the value changes without rerending */}
      <div>
        <input
          ref={inputRef}
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <div>My name is {name} </div>
        <button onClick={focus}>FOCUS</button>
      </div>
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
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
