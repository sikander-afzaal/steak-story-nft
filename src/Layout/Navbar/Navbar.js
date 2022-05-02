import React from "react";
//update logo in the logo.js file
import Logo from "../../Components/Logo/Logo.js";
import "./Navbar.css";
import hamburger from "../../Assets/hamburger.png";
import crossIcon from "../../Assets/cross-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
                href="#home"
                className="nav-link montserrat"
                onClick={() => setShow(false)}
              >
                Home
              </a>
              <a
                href="#story"
                offset={80}
                className="nav-link montserrat"
                onClick={() => setShow(false)}
              >
                Story
              </a>
              <a
                href="#roles"
                className="nav-link montserrat"
                onClick={() => setShow(false)}
              >
                Roles
              </a>
              <a
                href="#util"
                className="nav-link montserrat"
                onClick={() => setShow(false)}
                offset={-100}
              >
                Utility
              </a>
              <a
                href="#roadmap"
                offset={-100}
                className="nav-link montserrat"
                onClick={() => setShow(false)}
              >
                Roadmap
              </a>
              <a
                href="#team"
                offset={-100}
                className="nav-link montserrat"
                onClick={() => setShow(false)}
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
            <div className="social-div">
              <a href="https://twitter.com/solsteaks" target={"_blank"}>
                <FontAwesomeIcon className="icon-head" icon={faTwitter} />
              </a>
              <a href="https://discord.gg/hgw7vHWQym" target={"_blank"}>
                <FontAwesomeIcon className="icon-head" icon={faDiscord} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
