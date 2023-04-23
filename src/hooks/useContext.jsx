import React from "react";
import FunctionContextComponent from "./useContextFunctions/FunctionContextComponent";
import { ThemeProvider } from "./useContextFunctions/ThemeContext";

export default function HookUseContext() {
  return (
    <>
      {/* Here you need to create the ThemeContext.Provider tag to have all your components being able to retrieve the value, in this case "darkTheming" which is a true or false, the Function... and Class... they are only the different ways to add context, but the most useful is the Function... so forget about the other one */}
      {/* First this ThemeProvider tag is providing all the values, states and functions to its children so they can access those values, you are wrapping them in a context */}
      <ThemeProvider>
        <h1>useContext hook</h1>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}
