"use client";
import { useState } from "react";
import Circle from "./Circle";

function ShowColor() {
  const colorList = ["#B9CEFB", "#CAFDE0", "#DFAEFF", "#FFB8EA", "#FFEDB4"];
  const [ShowColors, setShowColors] = useState(false);

  return (
    <div className="click">
      <button className="Btn" onClick={() => setShowColors(!ShowColors)}>
        <div className="sign">+</div>
        <div className="text">Create</div>
      </button>
      {ShowColors && (
        <div className="colors">
          {colorList.map((e) => {
            return <Circle color={e} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ShowColor;
