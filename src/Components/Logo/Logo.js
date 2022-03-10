import React from "react";
import LogoImg from "../../Assets/Logo.jpg";

function Logo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="logo-text">SOLSTEAKS</p>
    </div>
  );
}

export default Logo;
