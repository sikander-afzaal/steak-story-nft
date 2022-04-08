import React from "react";
import Fade from "react-reveal/Fade";
import "./Story.css";
import heading from "../../Assets/headings/heading1.png";
import headingMob from "../../Assets/headings/mobile-heading1.png";
function Story() {
  return (
    <div id="story" className="story-cont">
      <Fade left>
        <div className="story">
          {window.innerWidth <= 600 ? (
            <img className="heading" src={headingMob} alt="" />
          ) : (
            <img className="heading" src={heading} alt="" />
          )}

          <ul className="story-div">
            <li>
              Coming to you from the depths of Solana is a whole new world
              invented for <strong>all steak lovers - SolSteaks!</strong>
            </li>
            <li>
              With a collection of{" "}
              <strong>1269 gamified unique SolSteaks NFTs</strong> with a unique
              vintage-style art, there is something here for everyone who has
              ever ordered it rare - and liked it.
            </li>
            <li>
              SolSteaks owners enjoy all the good things in life like a decent
              meat cut and a self-generating income - steak dribbles - and this
              has inspired us to create a SolSteaks brand{" "}
              <strong>
                bringing together a global community of like-minded all foodies
                and tokenomics lovers.
              </strong>
            </li>
            <li>
              Each NFT will give you one of the{" "}
              <strong>
                essential roles within the SolSteaks House ecosystem.
              </strong>{" "}
              The more rare your role is, the more <strong>$WAGYU</strong> daily
              it brings!
            </li>
            <li>
              Owners of SolSteaks NFT will also enjoy{" "}
              <strong>in-real life benefits;</strong> as discounts at selected
              SolSteaks Houses, and exclusive access to in-real life SolSteaks
              meetups.
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
}

export default Story;
