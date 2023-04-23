import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
  // you set your local variable into the context variable
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  // there are just styles for the div to change
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC4",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  // this is an inline style where it receives an object with different CSS properties
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}
