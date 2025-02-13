import React from "react";
import "../Style/sidebar.css";
import Circle from "./Circle";
import LoginSVG from "./LoginSVG";
function Sidebar() {
  const colorList = ["#B9CEFB", "#CAFDE0", "#DFAEFF", "#FFB8EA", "#FFEDB4"];
  return (
    <>
      <div className="sidebar">
        <div className="title">EchoNotes</div>
        <div className="click">
          <button className="Btn">
            <div className="sign">+</div>
            <div className="text">Create</div>
          </button>
          <div className="colors">
            {colorList.map((e) => {
              console.log(e);
              return <Circle color={e} />;
            })}
          </div>
        </div>
        <div className="bottom">
          <LoginSVG />

          <button className="login">
            <span class="circle1"></span>
            <span class="circle2"></span>
            <span class="circle3"></span>
            <span class="circle4"></span>
            <span class="circle5"></span>
            <span class="text">Login</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
