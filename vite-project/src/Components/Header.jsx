import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav-left" aria-label="Primary navigation">
          <img
            className="brand"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXw6KEcDzgqA_txoidC-4F_aCel0xqu4SaKg_I6D3a660g7ivzEUxwvtDlftF_LkZicU&usqp=CAU"
            alt="Skillbridge logo"
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
