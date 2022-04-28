import React from "react";
import "./Team.css";
import teamImg1 from "../../Assets/Team/team (1).png";
import teamImg2 from "../../Assets/Team/team (2).png";
import teamImg4 from "../../Assets/Team/team (4).png";
import teamImg6 from "../../Assets/Team/team (6).png";
import teamImg3 from "../../Assets/Team/team (3).png";
import teamImg7 from "../../Assets/Team/team (7).png";
import teamImg8 from "../../Assets/Team/team (8).png";
import head from "../../Assets/Team/team-head.png";
import headMob from "../../Assets/Team/team-head-mob.png";
function Team() {
  return (
    <div id="team" className="team-cont">
      <img src={head} className="team-head desk" alt="" />
      <img src={headMob} className="team-head mob" alt="" />
      <div className="team">
        <a href="#" className="team-img5">
          <img src={teamImg1} alt="" className="team-img" />
        </a>
        <a href="#" className="team-img6">
          {" "}
          <img src={teamImg7} alt="" className="team-img" />
        </a>
        <a href="#" className="team-img1">
          <img src={teamImg3} alt="" className="team-img" />
        </a>

        <a href="#" className="team-img2">
          <img src={teamImg4} alt="" className="team-img" />
        </a>
        {/* <h2 className="abs-h2">
          Click on the roles <br /> to go to their twitter account
        </h2> */}
        <a href="#" className="team-img3">
          {" "}
          <img src={teamImg2} alt="" className="team-img" />
        </a>

        <a href="#" className="team-img4">
          <img src={teamImg6} alt="" className="team-img" />
        </a>
        <a href="#" className="team-img4">
          <img src={teamImg8} alt="" className="team-img" />
        </a>
        <a href="#" className="team-img4">
          <img src={teamImg6} alt="" className="team-img" />
        </a>
      </div>
    </div>
  );
}

export default Team;
