import React from "react";
import { useState, useContext } from "react";

// you first create your context tag that will be the parent element that will share values to its children
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// this will create our state and will be shared to the children
export function useTheme() {
  return useContext(ThemeContext);
}
// this will update the state and will be shared to the children
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  // we define a state to change the theme
  const [darkTheming, setDarkTheming] = useState(true);

  // function to toggle the theme
  function toggleTheme() {
    setDarkTheming((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    // here you are wrapping any children that is passed into to different contexts, the darkTheming context (a state) and the toggleTheme that will gives us the action to toggle the theme
    <ThemeContext.Provider value={darkTheming}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
