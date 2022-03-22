import React from "react";
import "./Roadmap.css";
import circle from "../../Assets/Roadmap/RMcircle.png";
import steak from "../../Assets/Roadmap/RMsteak.png";
import head from "../../Assets/Roadmap/rm-header.png";
import line1 from "../../Assets/Roadmap/rm-line1.png";
import line2 from "../../Assets/Roadmap/rm-line2.png";
function Roadmap() {
  return (
    <div className="roadmap-cont">
      <div className="roadmap">
        <img src={steak} alt="" className="steak" />
        <img className="heading" src={head} alt="" />
        <div className="roadmap-div">
          <div className="circle-road-div1">
            <img src={circle} alt="" className="circle-road road1" />
          </div>
          <div className="circle-road-div2">
            <img src={circle} alt="" className="circle-road road2" />
          </div>
          <div className="circle-road-div3">
            <img src={circle} alt="" className="circle-road road3" />
          </div>
          <div className="circle-road-div4">
            <img src={circle} alt="" className="circle-road road4" />
          </div>
          <div className="circle-road-div5">
            <img src={circle} alt="" className="circle-road road5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
