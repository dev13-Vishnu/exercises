import React, { useState } from "react";

function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <header className="header">
        <h1>Theme Toggle Example</h1>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          Switch to {isDarkTheme ? "Light" : "Dark"} Theme
        </button>
      </header>
      <main className="content">
        <p> This is a simple example  of a light/dark theme in React.</p>
      </main>
    </div>
  );
}
export default ThemeToggle;
