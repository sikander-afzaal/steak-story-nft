import React from "react";
import "./Hero.css";
import img from "../../Assets/hero.jpeg";
import Fade from "react-reveal/Fade";

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
            1269 gamified unique SolSteaks
          </Fade>
          <Fade top big cascade>
            for true foodies
          </Fade>
        </div>
        <Fade delay={1000} bottom big>
          <img src={img} alt="..." />

          <div className="hero-bot">
            <p className="hero-desc">
              Stake your rebellious Steak 🥩😈 & become one of key members of
              SolSteaks House 🏡 with tokenised rewards. Building a true foodie
              community & brand on Solana! 😎 WAGSI! We all gonna STEAK IT!🥩
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
