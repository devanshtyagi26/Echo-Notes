import React from "react";
import Hamburger from "./Hamburger";
import DarkMode from "./DarkMode";
import UserNav from "./UserNav";

function Navbar() {
  return (
    <div className="navbar">
      <div className="title">MY NOTES</div>
      <div className="navLeft">
        <DarkMode />
        <UserNav />
        <Hamburger />
      </div>
    </div>
  );
}

export default Navbar;
