import React from "react";
import Switch from "./DarkMode";

function Navbar() {
  return (
    <div className="navbar">
      <div className="title">MY NOTES</div>
      <Switch />
    </div>
  );
}

export default Navbar;
