import React from "react";
import "./Utility.css";
import img from "../../Assets/util.png";
import line from "../../Assets/utility line.png";
import mobImg from "../../Assets/util-mob.png";
function Utility() {
  return (
    <div id="util" className="util-cont">
      <div className="util">
        <img src={img} alt="" className="util-img" />

        <div className="card card1">
          <h2 className="sub">Foodie, Chef, Star, Celeb Chef</h2>
          <ul className="story-div">
            <li>
              {" "}
              Collect $WAGYU & exchange it for your Steaks House NFT. Risk
              factor involved. 60% chance to get Steaks House NFT, 10% chance
              that your Steaks House NFT is on 🔥!
            </li>
          </ul>
        </div>
        <img src={line} alt="" className="line-util" />
        <div className="card card2">
          <h2 className="sub">Rancher</h2>
          <ul className="story-div">
            <li>
              Collect $WAGYU & exchange it for your Farm NFT. Risk factor
              involved. 67% chance to get Farm NFT, 13% chance that your Farm
              NFT is on 🔥
            </li>
          </ul>
        </div>
        <img src={line} alt="" className="line-util" />
        <div className="card card3">
          <h2 className="sub">IRL Utility</h2>
          <ul className="story-div">
            <li>$WAGYU as only ticket to IRL events.</li>
            <li>
              Discounts at selected steaks houses <br /> (long-term plan)
            </li>
          </ul>
        </div>
        <img src={mobImg} className="mobile-circle anim-round" alt="" />
        <div className="card card4">
          <h2 className="sub">MEAT Cook Book</h2>
          <ul className="story-div">
            <li>
              Be part and get access to Community Cook Book. 50% of profit going
              back to SolSteaks House DAO.
            </li>
          </ul>
        </div>
        <img src={line} alt="" className="line-util" />
        <div className="card card5">
          <h2 className="sub">Future $WAGYU mints</h2>
          <ul className="story-div">
            <li>Use $WAGYU for future mints and auctions.</li>
          </ul>
        </div>
        <img src={line} alt="" className="line-util" />
        <div className="card card6">
          <h2 className="sub">$WAGYU Whitelists & Raffles</h2>
          <ul className="story-div">
            <li>Purchase Whitelists of selected projects.</li>
            <li>Use for regular Raffles.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Utility;
