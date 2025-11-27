import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXw6KEcDzgqA_txoidC-4F_aCel0xqu4SaKg_I6D3a660g7ivzEUxwvtDlftF_LkZicU&usqp=CAU"
            alt="Skillbridge"
            className="footer-logo"
          />
          <p className="footer-desc">
            SKILL BRIDGE — modern, project-led learning for makers. Established
            in 2014 and acquired by the Zen Group in 2022, Skill bridge is
            dedicated to providing effective and high-quality learning and
            skilling programs that transcend language barriers in technology
            education. Skill bridge today is trusted by over 3 million learners
            and 2000+ corporate partners.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <strong>Email:</strong>
                <a
                  href="mailto:hello@skillbridge.example"
                  className="footer-link"
                >
                  hello@skillbridge.example
                </a>
              </li>
              <li>
                <strong>Phone:</strong>
                <a href="tel:+1234567890" className="footer-link">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <strong>Address:</strong>
                <address className="footer-address">
                  1234 Teal Avenue, Suite 210, Oceanview, CA
                </address>
              </li>
            </ul>
          </div>

          <div className="footer-social" aria-label="Social media links">
            <h4>Follow</h4>
            <div className="social-list">
              <a className="social-link" aria-label="Twitter" title="Twitter">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="icon"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>

              <a className="social-link" aria-label="Facebook" title="Facebook">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="icon"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.4c0-2.46 1.48-3.82 3.74-3.82 1.08 0 2.21.2 2.21.2v2.43H15.9c-1.26 0-1.65.78-1.65 1.58v1.9h2.8l-.45 2.9h-2.35V22A10 10 0 0022 12z" />
                </svg>
              </a>

              <a
                className="social-link"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="icon"
                >
                  <path d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm5 6.2A4.8 4.8 0 1113 17a4.8 4.8 0 010-8.8zM18.5 6a1.1 1.1 0 11.001 2.201A1.1 1.1 0 0118.5 6z" />
                </svg>
              </a>
            </div>

            <p className="footer-copyright">
              © {new Date().getFullYear()} Skillbridge. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
