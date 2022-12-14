import "../css/Pomodoro.css";
import "../css/main.css";
import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://caltrack.typedream.app/">
            <img
              src="../img/logo.png"
              alt="Logo"
              className="d-inline-block align-text-top logo"
            />
            CalTrack ADHD
          </a>
          <div className="d-flex">
            <a className="nav-link" href="https://caltrack.typedream.app/journey">
              My Journey
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
