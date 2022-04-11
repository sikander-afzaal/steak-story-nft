import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import "./Story.css";
import heading from "../../Assets/headings/heading1.png";
import headingMob from "../../Assets/headings/mobile-heading1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
function Story() {
  const [load, setLoad] = useState(false);
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
              Owners of SolSteaks NFT will form{" "}
              <strong>SolSteaks House DAO</strong>; a community of hungry
              foodies where everyone is equal. 1x🥩 = 1x🥩
            </li>
            {load ? (
              <>
                <li>
                  Our goal is to establish a food brand, starting with the
                  <strong>Community Cook Book</strong> and super *cool cooking
                  merch*. We are a team of very passionate about food! What
                  could be next, SolSteaks rubs or chocolates? 🥩👨‍🍳
                </li>
                <li>
                  The second goal of SolSteaks House DAO will be to{" "}
                  <strong>support new artists & community members</strong>{" "}
                  throughout their NFT journey. It will include Alpha tips and
                  support with marketing, development & community building. As
                  we grow, we will employ talented individuals from the
                  community & help them to develop into real blockchain
                  professionals. 🥩 🤝 🥩
                </li>
                <li>
                  SolSteaks want to do good in this world & we will{" "}
                  <strong>donate 5% to a charity</strong> feeding the homeless.
                  🥩 ❤
                </li>
                <li>
                  We want our community to meet IRL, and upon selling out, we
                  will organise <strong>Solana Summer BBQ</strong> and discover
                  who is a real foodie. 🥩🥂🎉🥩 IRL
                </li>
                <li>
                  Join us on this incredible journey of bringing together the
                  community around food, fun & fantastic vintage art.
                </li>
                <li>
                  It is only the beginning! We will be bringing more art to the
                  space, we can even open a cafe IRL or create a cooking P2E
                  game in the long run - the sky is the limit! Delicious 😋
                </li>
                <a href="#story">
                  {" "}
                  <FontAwesomeIcon
                    onClick={() => setLoad(false)}
                    className="load"
                    icon={faChevronUp}
                  />
                </a>
              </>
            ) : (
              <FontAwesomeIcon
                onClick={() => setLoad(true)}
                className="load"
                icon={faChevronDown}
              />
            )}
          </ul>
        </div>
      </Fade>
    </div>
  );
}

export default Story;
