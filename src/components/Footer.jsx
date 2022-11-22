import "../css/Footer.css";
import "../css/main.css";
import profile from "../img/pfp.png";
import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="profile">
        <img src={profile} alt="Atul Anand" className="pfp" />
        <h1 className="name">Atul Anand</h1>
        <div className="footer-copyright">
          <p className="footer-copyright-text">
            Copyright © 2022 Atul. All rights reserved.
          </p>
        </div>
      </div>
      <div className="footer__links">
        <h2 className="socials">Socials</h2>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a
              href="https://twitter.com/AtulACleaver"
              target="_blank"
              className="footer-list-item-links"
            >
              Twitter
            </a>
          </li>
          <li className="footer-list-item">
            <a
              href="https://github.com/AtulACleaver"
              target="_blank"
              className="footer-list-item-links"
            >
              GitHub
            </a>
          </li>
          <li className="footer-list-item">
            <a
              href="https://www.linkedin.com/in/atulacleaver/"
              target="_blank"
              className="footer-list-item-links"
            >
              LinkedIn
            </a>
          </li>
          <li className="footer-list-item">
            <a
              href="https://www.instagram.com/atul_cleaver/"
              target="_blank"
              className="footer-list-item-links"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
