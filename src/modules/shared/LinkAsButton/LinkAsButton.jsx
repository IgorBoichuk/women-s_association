import React from "react";
import style from "./LinkAsButton.module.scss";

export const LinkAsButton = ({ link, children }) => {
  return (
    <a href={link} target="blank" className={style.buttonYellow}>
      {children}
    </a>
  );
};
