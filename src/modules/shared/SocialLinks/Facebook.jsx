import React from "react";
import style from "./Facebook.module.scss";
import { Link } from "react-router-dom";
import sprite from "../../../assets/svg/sprite.svg";

export const Facebook = () => {
  return (
    <Link className={style.socialLink}>
      <svg width="46" height="46" className={style.socialIcon}>
        <use xlinkHref={`${sprite}#facebook`}></use>
      </svg>
    </Link>
  );
};
