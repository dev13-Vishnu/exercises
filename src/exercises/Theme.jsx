import React, { useState } from "react";
// import "./App.css"; // Create and include CSS for the themes

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Default is light theme

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <header className="header">
        <h1>Theme Toggle Example</h1>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          Switch to {isDarkTheme ? "Light" : "Dark"} Theme
        </button>
      </header>
      <main className="content">
        <p>This is a simple example of a light/dark theme toggle in React.</p>
      </main>
    </div>
  );
};

export default ThemeToggle;
