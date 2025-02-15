"use client";
import React from "react";
import "../Style/colorPallet.css";
function ColorPallet() {
  return (
    <>
      <div className="menu">
        <input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="lines line-1" />
          <span className="lines line-2" />
        </label>
        <a href="#" className="menu-item blue">
          {" "}
          <i className="fa fa-anchor" />{" "}
        </a>
        <a href="#" className="menu-item green">
          {" "}
          <i className="fa fa-coffee" />{" "}
        </a>
        <a href="#" className="menu-item red">
          {" "}
          <i className="fa fa-heart" />{" "}
        </a>
        <a href="#" className="menu-item purple">
          {" "}
          <i className="fa fa-microphone" />{" "}
        </a>
        <a href="#" className="menu-item orange">
          {" "}
          <i className="fa fa-star" />{" "}
        </a>
        <a href="#" className="menu-item lightblue">
          {" "}
          <i className="fa fa-diamond" />{" "}
        </a>
      </div>
    </>
  );
}

export default ColorPallet;
