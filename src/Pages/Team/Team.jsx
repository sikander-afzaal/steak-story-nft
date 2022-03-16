import React from "react";
import "./Team.css";
import teamImg1 from "../../Assets/Team/team (1).png";
import teamImg2 from "../../Assets/Team/team (2).png";
import teamImg3 from "../../Assets/Team/team (3).png";
import teamImg4 from "../../Assets/Team/team (4).png";
import head from "../../Assets/Team/team-head.png";
import headMob from "../../Assets/Team/team-head-mob.png";
function Team() {
  return (
    <div id="team" className="team-cont">
      {window.innerWidth <= 864 ? (
        <img src={headMob} className="team-head" alt="" />
      ) : (
        <img src={head} className="team-head" alt="" />
      )}

      <div className="team">
        <img src={teamImg1} alt="" className="team-img team-img1" />
        <img src={teamImg3} alt="" className="team-img team-img2" />
        <img src={teamImg2} alt="" className="team-img team-img3" />
        <img src={teamImg4} alt="" className="team-img team-img4" />
        <img src={teamImg4} alt="" className="team-img team-img5" />
        <img src={teamImg4} alt="" className="team-img team-img6" />
      </div>
    </div>
  );
}

export default Team;
