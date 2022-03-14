import React from "react";
import "./Utility.css";
function Utility() {
  return (
    <div className="story-cont">
      <div className="util">
        <h1>Sol Steaks Utility</h1>
        <div className="cards-div">
          <div className="card">
            <h2 className="sub">
              Foodie, Chill Out Manager, Star, Celeb Head Chef
            </h2>
            <ul className="story-div">
              <li>Collect $WAGYU & exchange it for your Steaks House.</li>
              <li>Use $WAGYU to decorate your Steak House.</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="sub">Rancher</h2>
            <ul className="story-div">
              <li>Collect $WAGYU & exchange it for your Farm.</li>
              <li>Use $WAGYU to decorate your Farm.</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="sub">IRL Utility</h2>
            <ul className="story-div">
              <li>$WAGYU as only ticket to IRL events.</li>
              <li>Discounts at selected Steaks Houses</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="sub">$WAGYU Merch</h2>
            <ul className="story-div">
              <li>$WAGYU to be used within merch store.</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="sub">Future $WAGYU mints</h2>
            <ul className="story-div">
              <li>Use $WAGYU for future mints and auctions.</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="sub">$WAGYU Whitelists & Raffles</h2>
            <ul className="story-div">
              <li>Purchase Whitelists of selected projects.</li>
              <li>Use for regular Raffles.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utility;
