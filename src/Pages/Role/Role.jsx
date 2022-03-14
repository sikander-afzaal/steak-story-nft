import React, { useState } from "react";
import "./Role.css";
import title from "../../Assets/Role/Rolessolo.png";
import star from "../../Assets/Role/starsolo.png";
import chef from "../../Assets/Role/celebsolo.png";
import manager from "../../Assets/Role/mgrsolo.png";
import rancher from "../../Assets/Role/ranchersolo.png";
import foodie from "../../Assets/Role/foodiesolo.png";
import foodieHead from "../../Assets/Role/foodies.png";
import foodieHeadMob from "../../Assets/Role/foodies-mob.png";
import HeadChefMob from "../../Assets/Role/Headchef-mob.png";
import HeadChef from "../../Assets/Role/Headchef.png";
import ManagerMob from "../../Assets/Role/Manager-mob.png";
import Manager from "../../Assets/Role/Manager.png";
import rancherMob from "../../Assets/Role/rancher-mob.png";
import rancherHead from "../../Assets/Role/rancher.png";
import starsMob from "../../Assets/Role/stars-mob.png";
import starsHead from "../../Assets/Role/stars.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Role() {
  const [openModal, setModal] = useState(false);
  const [modalText, setText] = useState("");
  const [modalImg, setImg] = useState("");
  const [modalImgMob, setImgMob] = useState("");
  const openModalFunc = (head, text, mobHead) => {
    setModal(true);
    setImg(head);
    setText(text);
    setImgMob(mobHead);
    const modal = document.querySelector(".modal");
    console.log(modal.getClientRects());
  };
  return (
    <div id="roles" className="role-cont">
      <div className={`modal ${openModal ? "open-modal" : ""}`}>
        <FontAwesomeIcon
          onClick={() => {
            setModal(false);
          }}
          icon={faXmark}
        />
        {window.innerWidth <= 600 ? (
          <img src={modalImgMob} alt="" />
        ) : (
          <img src={modalImg} alt="" />
        )}

        <p>{modalText}</p>
      </div>
      <div className="role">
        <img
          onClick={() => {
            openModalFunc(
              starsHead,
              `The most exclusive; there are only 6 Star NFTs in the whole collection. They love to eat the finest cuts and drink the most lavish champagne in SolSteaks House VIP area.`,
              starsMob
            );
          }}
          src={star}
          alt=""
          className="role-img"
        />
        <img
          style={{ pointerEvents: "none", cursor: "default" }}
          src={title}
          alt=""
          className="role-img"
        />
        <img
          onClick={() => {
            openModalFunc(
              HeadChef,
              `They love to make the most delicious meals and bring the finest dining in the SolSteaks House. They are proud of their dishes and ensure that every ingredient is carefully selected.`,
              HeadChefMob
            );
          }}
          src={chef}
          alt=""
          className="role-img"
        />
        <h1 className="role-h1">Click on Role to find out more</h1>
        <img
          onClick={() => {
            openModalFunc(
              Manager,
              `They run the show; they smoke a lot of weed and tend to forget things easily. They seem like they are not going to get anything done but rest assured, they do, and the service is top notch.`,
              ManagerMob
            );
          }}
          src={manager}
          alt=""
          className="role-img"
        />
        <img
          onClick={() => {
            openModalFunc(
              rancherHead,
              `They are passionate about the animals; you can hear them laughing at the farm every day. They would do anything to ensure that the animals are healthy, well-fed, and provide good quality meat to the SolSteak House. `,
              rancherMob
            );
          }}
          src={rancher}
          alt=""
          className="role-img"
        />
        <img
          onClick={() => {
            openModalFunc(
              foodieHead,
              `They love their steaks; they would travel miles to eat the finest
          steak in the world, although sometimes they might eat mystery meat
          instead.`,
              foodieHeadMob
            );
          }}
          src={foodie}
          alt=""
          className="role-img"
        />
      </div>
    </div>
  );
}

export default Role;
