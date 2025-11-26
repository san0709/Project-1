import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing" aria-labelledby="pricing-heading">
      <div className="pricing-inner container">
        <header className="pricing-header">
          <h2 id="pricing-heading">Pricing plans</h2>
          <p className="pricing-lead">
            Pick a plan that fits your learning goals — upgrade any time.
          </p>
        </header>

        <div className="pricing-grid" role="list">
          <article className="plan plan-free" role="listitem">
            <div className="plan-body">
              <div className="plan-top">
                <h3 className="plan-title">Free</h3>
                <p className="plan-price">
                  <span className="price-amount">$0</span>/mo
                </p>
              </div>

              <p className="plan-desc">
                Perfect to try course previews and a few guided projects.
              </p>

              <ul className="plan-features">
                <li>Access to selected lessons</li>
                <li>Community support</li>
                <li>1 project review</li>
              </ul>

              <div className="plan-actions">
                <button
                  className="btn btn-outline"
                  aria-label="Choose Free plan"
                >
                  Start free
                </button>
                <a
                  href="#"
                  className="plan-link"
                  aria-label="View Free details"
                >
                  Details
                </a>
              </div>
            </div>
          </article>

          <article className="plan plan-pro" role="listitem">
            <div className="plan-badge">Most popular</div>
            <div className="plan-body">
              <div className="plan-top">
                <h3 className="plan-title">Pro</h3>
                <p className="plan-price">
                  <span className="price-amount">$24</span>/mo
                </p>
              </div>

              <p className="plan-desc">
                Full access to all courses, projects and dedicated career
                support.
              </p>

              <ul className="plan-features">
                <li>All lessons & projects</li>
                <li>Unlimited project reviews</li>
                <li>1:1 career coaching</li>
                <li>Mock interviews & portfolio review</li>
              </ul>

              <div className="plan-actions">
                <button
                  className="btn btn-primary"
                  aria-label="Choose Pro plan"
                >
                  Get Pro
                </button>
                <a href="#" className="plan-link" aria-label="View Pro details">
                  See features
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
