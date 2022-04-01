import React from "react";
import "./Roadmap.css";
import circle from "../../Assets/Roadmap/RMcircle.png";
import steak from "../../Assets/Roadmap/RMsteak.png";
import head from "../../Assets/Roadmap/rm-header.png";
import line1 from "../../Assets/Roadmap/rm-line1.png";
import line2 from "../../Assets/Roadmap/rm-line2.png";
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
                Art creation | Building a true foodie community | Brand building
              </p>
            </div>
          </div>
          <div className="circle-road-div2">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road2" />
              <p className="abs-text-road">SolSteaks mint day 🥩</p>
            </div>
          </div>
          <div className="circle-road-div3">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road3" />
              <p className="abs-text-road">
                Staking with 5 roles | Steak & collect $WAGYU | Interesting role
                based tokenomics{" "}
              </p>
            </div>
          </div>
          <div className="circle-road-div4">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road4" />
              <p className="abs-text-road">
                Exchange $WAGYU for Steaks House NFT or Rancher NFT depending on
                your role | Risk factor involved
              </p>
            </div>
          </div>
          <div className="circle-road-div5">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road5" />
              <p className="abs-text-road">
                Exclusive IRL events | Discounts in selected Steaks Houses
              </p>
            </div>
          </div>
          <div className="circle-road-div6">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road6" />
              <p className="abs-text-road">
                Community Cook Book with recipes around the World{" "}
              </p>
            </div>
          </div>
          <div className="circle-road-div7">
            <div className="wrapper-img">
              <img src={circle} alt="" className="circle-road road7" />
              <p className="abs-text-road">
                Launch of SolSteaks merch | SolSteaks food products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
