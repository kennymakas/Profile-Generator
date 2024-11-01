import React, { useState } from 'react';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light-mode' : 'dark-mode';
  };

  return (
    <button onClick={toggleTheme}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

export default ThemeSwitcher;
