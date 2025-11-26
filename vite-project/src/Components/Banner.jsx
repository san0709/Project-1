import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-inner container">
        <div className="badge">
          <svg
            className="badge-icon"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2c2.8 0 5 2.2 5 5 0 3.3-2.5 6.8-5 9.8C9.5 13.8 7 10.3 7 7c0-2.8 2.2-5 5-5z"
              stroke="#fff"
              strokeWidth="1.2"
            />
            <circle cx="12" cy="7" r="1.6" fill="#fff" />
          </svg>

          <div className="badge-text">
            <p className="badge-lead">
              <span className="badge-title">Unlock </span>Your Creative
              Potential
            </p>
          </div>
        </div>

        <p className="banner-sub">with Online Design and Development Courses.</p>
        <p className="banner-desc">
          Learn from Industry Experts and Enhance Your Skills.
        </p>

        <div className="banner-ctas">
          <button className="btn primary">Explore Courses</button>
          <button className="btn secondary">View Pricing</button>
        </div>
      </div>
    </section>
  );
}
