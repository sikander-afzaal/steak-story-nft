import React from "react";
import Fade from "react-reveal/Fade";
import "./Story.css";
function Story() {
  return (
    <div className="story-cont">
      <Fade bottom>
        <div className="story">
          <h1>SOLSTEAKS Story</h1>
          <div className="story-div">
            <p>
              Coming to you from the depths of Solana is a whole new world
              invented for <strong>all steak lovers - SolSteaks!</strong>
            </p>
            <p>
              With a collection of{" "}
              <strong>3,333 gamified unique SolSteaks NFTs</strong> with a
              unique vintage-style art, there is something here for everyone who
              has ever ordered it rare - and liked it.
            </p>
            <p>
              SolSteaks owners enjoy all the good things in life like a decent
              meat cut and a self-generating income - steak dribbles - and this
              has inspired us to create a SolSteaks brand{" "}
              <strong>
                bringing together a global community of like-minded all foodies
                and tokenomics lovers.
              </strong>
            </p>
            <p>
              Can you imagine you are chilling on a beach with your SolSteaks
              community, eating steak while you steak your steak NFT? Well yes,
              this is our vision!
            </p>
            <p>
              Each NFT will give you one of the{" "}
              <strong>
                essential roles within the SolSteaks House ecosystem.
              </strong>{" "}
              The more rare your role is, the more <strong>$WAGYU</strong> daily
              it brings!
            </p>
            <p>
              Owners of SolSteaks NFT will also enjoy{" "}
              <strong>in-real life benefits;</strong> as discounts at selected
              SolSteaks Houses, and exclusive access to in-real life SolSteaks
              meetups.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Story;
