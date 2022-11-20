import "../css/Pomodoro.css";
import "../css/main.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="../public/index.html">
            <img
              src="../img/logo.png"
              alt="Logo"
              className="d-inline-block align-text-top logo"
            />
            CalTrack
          </a>
          <div className="d-flex">
            <a className="nav-link" href="##">
              My Journey
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
