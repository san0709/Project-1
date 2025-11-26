import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav-left" aria-label="Primary navigation">
          <img
            className="brand"
            src="https://icones.pro/wp-content/uploads/2021/06/icone-de-l-education-orange.png"
          />
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#course">Course</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </nav>

        <div className="nav-right">
          <button className="btn signup">Sign up</button>
          <button className="btn login">Login</button>
        </div>
      </div>
    </header>
  );
}
