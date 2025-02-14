"use client";
import React from "react";
import { useState } from "react";
import "../Style/colorPallet.css";

function ColorPallet() {
  return (
    <>
      <div className="tooltip-container">
        <span className="text">+</span>

        <div>
          <span className="tooltip1"></span>
          <span className="tooltip2"></span>
          <span className="tooltip3"></span>
          <span className="tooltip4"></span>
          <span className="tooltip5"></span>
        </div>
      </div>
    </>
  );
}

export default ColorPallet;
