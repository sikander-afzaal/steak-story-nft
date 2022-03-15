import React from "react";
import "./Hero.css";
import img from "../../Assets/hero.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Hero() {
  return (
    <div id="home" className="hero">
      <div className="line-div">
        <span className="color-lines line1"></span>
        <span className="color-lines line2"></span>
        <span className="color-lines line3"></span>
      </div>
      <div className="center-hero">
        <div className="hero-head">
          <Fade duration={1000} top big cascade>
            3,333 gamified unique SolSteaks
          </Fade>
          <Fade top big cascade>
            for true foodies
          </Fade>
        </div>
        <Fade delay={1000} bottom big>
          <img src={img} alt="..." />
          <div className="social-div">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faDiscord} />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
