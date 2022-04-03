import React, { useState } from "react";
import "./Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
import star from "../../Assets/star-solid.png";
import head from "../../Assets/headings/faq-center.png";
function Faq() {
  // if you want to add more questions just add another false here or vice versa
  const [open, setOpen] = useState([false, false, false, false]);

  //function to check which faq is opened
  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index == num) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
  };
  return (
    <div className="faq-cont">
      <div id="faq" className="faq">
        <img src={head} alt="" className="heading" />
        <div className="faq-div">
          <div className="faq-q-div">
            <div
              data-num={0}
              onClick={clickHandler}
              className={`faq-btn ${open[0] ? "border-radius" : ""}`}
            >
              <p className={`${open[0] ? "active-btn" : ""}`}>
                Who are SolSteaks team?
              </p>
              {open[0] ? (
                <FontAwesomeIcon
                  className={`${open[0] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[0] ? "active" : ""}`}>
              <p className="answer">
                <span>
                  <img src={star} alt="" />
                </span>
                An experienced blockchain team, with love for Solana blockchain
                due to its environmental friendliness and close community.
              </p>
            </div>
          </div>
          <div className="faq-q-div">
            <div
              data-num={1}
              onClick={clickHandler}
              className={`faq-btn ${open[1] ? "border-radius" : ""}`}
            >
              <p className={`${open[1] ? "active-btn" : ""}`}>
                How do I buy SolSteaks?
              </p>
              {open[1] ? (
                <FontAwesomeIcon
                  className={`${open[1] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[1] ? "active" : ""}`}>
              <p className="answer">
                <span>
                  <img src={star} alt="" />
                </span>
                You will be able to mint SolSteaks from our website. After the
                sell out, we will be listed on Magic Eden secondary exchange.
              </p>
            </div>
          </div>
          <div className="faq-q-div">
            <div
              data-num={2}
              onClick={clickHandler}
              className={`faq-btn ${open[2] ? "border-radius" : ""}`}
            >
              <p className={`${open[2] ? "active-btn" : ""}`}>
                Should I join SolSteaks community?
              </p>
              {open[2] ? (
                <FontAwesomeIcon
                  className={`${open[2] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[2] ? "active" : ""}`}>
              <p className="answer">
                <span>
                  <img src={star} alt="" />
                </span>
                If you are a big foodie lover, and you like the art, then
                SolSteaks is a right project for you to join.
              </p>
            </div>
          </div>
          <div className="faq-q-div">
            <div
              data-num={3}
              onClick={clickHandler}
              className={`faq-btn ${open[3] ? "border-radius" : ""}`}
            >
              <p className={`${open[3] ? "active-btn" : ""}`}>
                How can I contact the team?
              </p>
              {open[3] ? (
                <FontAwesomeIcon
                  className={`${open[3] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[3] ? "active" : ""}`}>
              <p className="answer">
                <span>
                  <img src={star} alt="" />
                </span>
                You can contact us on Twitter or Discord. Our DM is always open,
                so we look forward to hearing from you!
              </p>
            </div>
          </div>
          {
            // when you add a new faq make sure to increment the value in the brackets
          }
        </div>
      </div>
    </div>
  );
}

export default Faq;
