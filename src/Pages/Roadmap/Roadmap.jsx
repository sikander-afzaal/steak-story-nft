import React from "react";
import "./Roadmap.css";
import circle from "../../Assets/Roadmap/RMcircle.png";
import steak from "../../Assets/Roadmap/RM-steak.png";
import head from "../../Assets/Roadmap/rm-header.png";
function Roadmap() {
  return (
    <div id="roadmap" className="roadmap-cont">
      <div className="roadmap">
        <img src={steak} alt="" className="steak" />
        <img className="heading" src={head} alt="" />
        <div className="roadmap-div">
          <div className="circle-road-div1">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road1" />
              <p className="abs-text-road">
                Pre-Mint - Art creation | Community Building | Brand Awareness
              </p>
            </div>
          </div>
          <div className="circle-road-div2">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road2" />
              <p className="abs-text-road">
                10% sold - SolSteaks House DAO | Onboarding Community & IRL
                businesses
              </p>
            </div>
          </div>
          <div className="circle-road-div3">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road3" />
              <p className="abs-text-road">
                20% sold - Staking with 5 roles | Steak & collect $WAGYU |
                Interesting role based tokenomics with a twist
              </p>
            </div>
          </div>
          <div className="circle-road-div4">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road4" />
              <p className="abs-text-road">
                35% sold - Publish Community Cook Book with recipes around the
                World | 50% of sales profit going to SolSteaks House DAO
              </p>
            </div>
          </div>
          <div className="circle-road-div5">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road5" />
              <p className="abs-text-road">
                {" "}
                50% sold - Launch of cool SolSteaks cookin’ merch | Community
                Design Competition
              </p>
            </div>
          </div>
          <div className="circle-road-div6">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road6" />
              <p className="abs-text-road">
                75% sold - Donating 5% to charity to feed homeless | We care &
                make difference
              </p>
            </div>
          </div>
          <div className="circle-road-div7">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road7" />
              <p className="abs-text-road">
                100% sold - Solana Summer BBQ for the community | Exclusive
                community IRL meet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
