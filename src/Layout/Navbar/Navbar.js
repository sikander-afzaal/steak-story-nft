import React from "react";
//update logo in the logo.js file
import Logo from "../../Components/Logo/Logo.js";
import "./Navbar.css";
import hamburger from "../../Assets/hamburger.png";
import crossIcon from "../../Assets/cross-icon.png";

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", null);
    };
  });

  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="container-wrapper">
        <div className="navbar">
          <div className="navbar-left">
            <a href="#">
              <Logo />
            </a>
          </div>

          <div className="hamburger" onClick={() => setShow(!show)}>
            <img src={hamburger} alt="..." />
          </div>

          <div className={`navbar-right ${show ? "show" : ""}`}>
            <div className="nav-links">
              <img
                onClick={() => setShow(false)}
                className="cross-icon"
                src={crossIcon}
                alt="..."
              />
              <a
                href="#hero"
                className="nav-link montserrat"
                onClick={() => setShow(false)}
              >
                Home
              </a>
              <a
                href="#about"
                offset={80}
                className="nav-link montserrat"
                onClick={() => setShow(false)}
              >
                About
              </a>
              <a
                href="#roadmap"
                className="nav-link montserrat"
                onClick={() => setShow(false)}
              >
                Road Map
              </a>
              <a
                href="#team"
                className="nav-link montserrat"
                onClick={() => setShow(false)}
                offset={-100}
              >
                Team
              </a>
              <a
                href="#faq"
                offset={-100}
                className="nav-link montserrat"
                onClick={() => setShow(false)}
              >
                FAQ
              </a>
            </div>
            <a href="#" className="nav-btn teko">
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
