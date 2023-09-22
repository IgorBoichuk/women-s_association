import React from "react";
import style from "./ButtonMain.module.scss";

const ButtonMain = ({ children, color, maxW, onClick, bg, type }) => {
  const customStyle = {
    maxWidth: maxW,
    backgroundColor: bg,
  };

  const buttonClassName =
    color === "yellow" ? style.buttonYellow : style.buttonTransparent;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonClassName}`}
      style={customStyle}
    >
      {children}
    </button>
  );
};

export default ButtonMain;
