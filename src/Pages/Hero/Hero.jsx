import React from "react";
import "./Hero.css";
import img from "../../Assets/hero_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-head">
        <Fade duration={1000} top big cascade>
          777 unique explorations of
        </Fade>
        <Fade top big cascade>
          well traveled Mindfolk.
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
  );
}

export default Hero;
