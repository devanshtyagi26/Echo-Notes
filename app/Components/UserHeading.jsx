import React from "react";
import "../Style/userHeading.css";
function UserHeading() {
  return (
    <div className="textContainer">
      <div className="userInfo">
        <p className="userName">Welcome, John!</p>
        <p>Let’s make this day productive.</p>
      </div>
      <div className="taskInfo">
        <p>Total Tasks</p>
        <p className="taskCount">2,005</p>
      </div>
    </div>
  );
}

export default UserHeading;
