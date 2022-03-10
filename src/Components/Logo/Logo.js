import React from "react";
import LogoImg from "../../Assets/Logo.jpg";

function Logo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <img className="h_logo" src={LogoImg} alt="..." />
      <p style={{ color: "black" }}>SOLSTEAKS</p>
    </div>
  );
}

export default Logo;
