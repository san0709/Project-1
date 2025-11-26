import React from "react";
import "./Image.css";
import containerImg from "./Container.jpg";

export default function Image() {
  return (
    <div className="image-wrapper">
      <div className="image-container">
        <img src={containerImg} alt="Course container" />
      </div>
    </div>
  );
}
