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
              Welcome to the chilled & vintage SolSteaks House!🏡 Where family
              of 1,269 cheeky 🥩 are making chaos.😈
            </li>
            <li>
              Fatty T-Bone 🥩 is super proud of his king size.😋 While Skinny
              Vegan Burger 🌱doesn’t care about french fries. 🍟
            </li>
            <li>
              Miss Filet Mignon 🥰 is super witty.🤓 Today she looks amazingly
              pretty.🎀
            </li>
            <li>
              She has specially dressed up to rock 😈 the handsome Boss Golden
              Tomahawk.😎
            </li>
            <li>
              It is just another day in da good chilled SolSteaks House.🏡 Where
              family of rebellious 🥩 are making chaos.😈
            </li>
            {load ? (
              <>
                <li>
                  Everyone loves to chill & hang out here.🏡 Snoop Dog & Martha
                  Stewart pop by for a beer.🍻
                </li>
                <li>
                  Join us on this amazing journey our friends.🕺💃🏻 Let’s create
                  & have fun together until the ends.🍔🎉🥩
                </li>

                <li>
                  It’s a SolSteaks House your home online.😊 Your place to play,
                  learn, cook & dine.❤️🔥😋
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
