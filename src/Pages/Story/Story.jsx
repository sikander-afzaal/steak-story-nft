import React from "react";
import Fade from "react-reveal/Fade";
import "./Story.css";
import heading from "../../Assets/headings/heading1.png";
import headingMob from "../../Assets/headings/mobile-heading1.png";
function Story() {
  return (
    <div className="story-cont">
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
              invented for all steak lovers - SolSteaks!
            </li>
            <li>
              With a collection of 3,333 gamified unique SolSteaks NFTs with a
              unique vintage-style art, there is something here for everyone who
              has ever ordered it rare - and liked it.
            </li>
            <li>
              SolSteaks owners enjoy all the good things in life like a decent
              meat cut and a self-generating income - steak dribbles - and this
              has inspired us to create a SolSteaks brand bringing together a
              global community of like-minded all foodies and tokenomics lovers.
            </li>
            <li>
              Each NFT will give you one of the essential roles within the
              SolSteaks House ecosystem. The more rare your role is, the more
              $WAGYU daily it brings!
            </li>
            <li>
              Owners of SolSteaks NFT will also enjoy in-real life benefits; as
              discounts at selected SolSteaks Houses, and exclusive access to
              in-real life SolSteaks meetups.
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
}

export default Story;
