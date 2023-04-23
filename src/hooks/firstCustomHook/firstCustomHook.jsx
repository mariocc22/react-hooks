import React from "react";
import useLocalStorage from "./useLocalStorage";
import useLogPrompt from "./useLogPrompt";

function FirstCustomHook() {
  const [name, setName] = useLocalStorage("name", "");
  useLogPrompt(name);
  return (
    <>
      <h1>
        Custom Hook (saves info inside localstorage and print in the console
        when change the input)
      </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default FirstCustomHook;
