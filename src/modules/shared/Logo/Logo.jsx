import React from "react";
import style from "./Logo.module.scss";
import sprite from "../../../assets/svg/sprite.svg";

export const Logo = () => {
  return (
    <div className={style.logoRapper}>
      <svg className={style.logo} width="42" height="42">
        <use xlinkHref={`${sprite}#logo`}></use>
      </svg>
      <span className={style.logoText}>
        Об’єднання матерів та дружин Захисників України
      </span>
    </div>
  );
};
