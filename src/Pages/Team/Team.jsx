import React from "react";
import "./Team.css";
import teamImg1 from "../../Assets/Team/team (1).png";
import teamImg2 from "../../Assets/Team/team (2).png";
import teamImg4 from "../../Assets/Team/team (4).png";
import teamImg6 from "../../Assets/Team/team (6).png";
import head from "../../Assets/Team/team-head.png";
import headMob from "../../Assets/Team/team-head-mob.png";
function Team() {
  return (
    <div id="team" className="team-cont">
      <img src={head} className="team-head desk" alt="" />
      <img src={headMob} className="team-head mob" alt="" />
      <div className="team">
        <a
          href="https://twitter.com/bymarebuzolic"
          target={"blank"}
          className="team-img1"
        >
          <img src={teamImg1} alt="" className="team-img" />
        </a>

        <a
          href="https://twitter.com/@Willowcatstudio"
          target={"blank"}
          className="team-img2"
        >
          <img src={teamImg4} alt="" className="team-img" />
        </a>
        <h2 className="abs-h2">
          Click on the roles <br /> to go to their twitter account
        </h2>
        <a
          href="https://twitter.com/@fajripersiano"
          target={"blank"}
          className="team-img3"
        >
          {" "}
          <img src={teamImg2} alt="" className="team-img" />
        </a>

        <a
          href="https://twitter.com/@NasiruS66111359"
          target={"blank"}
          className="team-img4"
        >
          <img src={teamImg6} alt="" className="team-img" />
        </a>
      </div>
    </div>
  );
}

export default Team;
