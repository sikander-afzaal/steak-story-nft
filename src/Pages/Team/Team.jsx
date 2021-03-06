import React from "react";
import "./Team.css";
import teamImg1 from "../../Assets/Team/team (1).png";
import teamImg2 from "../../Assets/Team/team (2).png";
import teamImg4 from "../../Assets/Team/team (4).png";
import teamImg6 from "../../Assets/Team/team (6).png";
import teamImg3 from "../../Assets/Team/team (3).png";
import teamImg7 from "../../Assets/Team/team (7).png";
import teamImg8 from "../../Assets/Team/team (8).png";
import teamImg9 from "../../Assets/Team/team (9).png";
import head from "../../Assets/Team/team-head.png";
import headMob from "../../Assets/Team/team-head-mob.png";
function Team() {
  return (
    <div id="team" className="team-cont">
      <img src={head} className="team-head desk" alt="" />
      <img src={headMob} className="team-head mob" alt="" />
      <div className="team">
        <a
          target={"blank"}
          href="https://twitter.com/bymarebuzolic"
          className="team-img5"
        >
          <img src={teamImg1} alt="" className="team-img" />
        </a>
        <a
          target={"blank"}
          href="https://instagram.com/ht_society?igshid=YmMyMTA2M2Y="
          className="team-img6"
        >
          <img src={teamImg7} alt="" className="team-img" />
        </a>
        <a target={"blank"} href="#team" className="team-img1">
          <img src={teamImg3} alt="" className="team-img" />
        </a>

        <a
          target={"blank"}
          href="https://twitter.com/@willowcatstudio"
          className="team-img2"
        >
          <img src={teamImg4} alt="" className="team-img" />
        </a>
        <h2 className="abs-h2">
          Click on the roles <br /> to go to their Twitter accounts
        </h2>
        <a
          target={"blank"}
          href="https://twitter.com/@fajripersiano"
          className="team-img3"
        >
          {" "}
          <img src={teamImg2} alt="" className="team-img" />
        </a>

        <a
          target={"blank"}
          href="https://twitter.com/@NasiruS66111359"
          className="team-img4"
        >
          <img src={teamImg6} alt="" className="team-img" />
        </a>
        <a
          target={"blank"}
          href="https://twitter.com/@QueenH__"
          className="team-img4"
        >
          <img src={teamImg8} alt="" className="team-img" />
        </a>
        <a
          target={"blank"}
          href="https://twitter.com/@_nighthawk69_"
          className="team-img4"
        >
          <img src={teamImg9} alt="" className="team-img" />
        </a>
      </div>
    </div>
  );
}

export default Team;
