import React from "react";
import "../Style/darkMode.css";
function DarkMode() {
  return (
    <label class="switch">
      <input type="checkbox" />
      <span class="slider"></span>
    </label>
  );
}

export default DarkMode;
