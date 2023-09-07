import React from "react";
import style from "./Logo.module.scss";
import sprite from "../../../assets/svg/sprite.svg";

export const Logo = ({ footerLogo }) => {
  return (
    <div className={style.logoRapper}>
      <svg className={footerLogo ? style.logoFooter : style.logo}>
        <use xlinkHref={`${sprite}#logo`}></use>
      </svg>
      <span className={footerLogo ? style.logoTextFooter : style.logoText}>
        Об’єднання матерів та дружин Захисників України
      </span>
    </div>
  );
};
