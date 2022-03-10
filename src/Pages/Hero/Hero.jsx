import React from "react";
import "./Hero.css";
import img from "../../Assets/hero_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Hero() {
  return (
    <div className="hero">
      <h1>
        777 unique explorations of <br /> well traveled Mindfolk.
      </h1>
      <img src={img} alt="..." />
      <div className="social-div">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faDiscord} />
      </div>
    </div>
  );
}

export default Hero;
