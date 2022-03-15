import React from "react";
import "./Utility.css";
import img from "../../Assets/util.png";
import mobImg from "../../Assets/Role/Rolessolo.png";
function Utility() {
  return (
    <div id="util" className="util-cont">
      <div className="util">
        <img src={img} alt="" className="util-img" />
        <div className="card card1">
          <h2 className="sub">
            Foodie, Chill Out Manager, Star, Celeb Head Chef
          </h2>
          <ul className="story-div">
            <li>Collect $WAGYU & exchange it for your Steaks House.</li>
            <li>Use $WAGYU to decorate your Steak House.</li>
          </ul>
        </div>
        <div className="card card2">
          <h2 className="sub">Rancher</h2>
          <ul className="story-div">
            <li>Collect $WAGYU & exchange it for your Farm.</li>
            <li>Use $WAGYU to decorate your Farm.</li>
          </ul>
        </div>
        <div className="card card3">
          <h2 className="sub">IRL Utility</h2>
          <ul className="story-div">
            <li>$WAGYU as only ticket to IRL events.</li>
            <li>Discounts at selected Steaks Houses</li>
          </ul>
        </div>
        <img src={mobImg} alt="" className="mobile-circle" />
        <div className="card card4">
          <h2 className="sub">$WAGYU Merch</h2>
          <ul className="story-div">
            <li>$WAGYU to be used within merch store.</li>
          </ul>
        </div>

        <div className="card card5">
          <h2 className="sub">Future $WAGYU mints</h2>
          <ul className="story-div">
            <li>Use $WAGYU for future mints and auctions.</li>
          </ul>
        </div>

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
