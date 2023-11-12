// src/components/DarkLightModeToggle.js

import React, { useState } from "react";

const DarkMoodtoggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    setDarkMode(!isDarkMode);
    htmlElement.setAttribute("data-theme", isDarkMode ? "light" : "dark");
  };

  return (
    <button onClick={toggleDarkMode} className="text-btnColors">
      <input type="checkbox" className="toggle" checked />
    </button>
  );
};

export default DarkMoodtoggle;
