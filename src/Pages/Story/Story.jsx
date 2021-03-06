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
              Welcome to the chilled & vintage SolSteaks House!π‘ Where family
              of 1,269 cheeky π₯© are making chaos.π
            </li>
            <li>
              Fatty T-Bone π₯© is super proud of his king size.π While Skinny
              Vegan Burger π±doesnβt care about french fries. π
            </li>
            <li>
              Miss Filet Mignon π₯° is super witty.π€ Today she looks amazingly
              pretty.π
            </li>
            <li>
              She has specially dressed up to rock π the handsome Boss Golden
              Tomahawk.π
            </li>
            <li>
              It is just another day in da good chilled SolSteaks House.π‘ Where
              family of rebellious π₯© are making chaos.π
            </li>
            {load ? (
              <>
                <li>
                  Everyone loves to chill & hang out here.π‘ Snoop Dog & Martha
                  Stewart pop by for a beer.π»
                </li>
                <li>
                  Join us on this amazing journey our friends.πΊππ» Letβs create
                  & have fun together until the ends.πππ₯©
                </li>

                <li>
                  Itβs a SolSteaks House your home online.π Your place to play,
                  learn, cook & dine.β€οΈπ₯π
                </li>

                <FontAwesomeIcon
                  onClick={() => {
                    setLoad(false);
                    const story = document
                      .querySelector("#story")
                      .getClientRects();
                    window.scroll(0, -story[0].top);
                    console.log(story[0].top);
                  }}
                  className="load"
                  icon={faChevronUp}
                />
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
