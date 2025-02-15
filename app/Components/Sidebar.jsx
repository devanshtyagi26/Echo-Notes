import React from "react";
import "../Style/sidebar.css";
import LoginSVG from "./LoginSVG";
import ColorPallet from "./ColorPallet";
import Button from "./ChooseColor";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="title">EchoNotes</div>
        {/* <ShowColor /> */}
        <ColorPallet />
        {/* <Button /> */}
        <div className="bottom">
          <LoginSVG />

          <button className="login">
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
            <span className="circle4"></span>
            <span className="circle5"></span>
            <span className="text">Login</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
