import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

export const Navigation = ({ footer }) => {
  return (
    <ul className={footer ? style.navListFooter : style.navList}>
      <li className={style.navItem}>
        <NavLink to="/" className={style.navLink}>
          Головна
        </NavLink>
      </li>
      <li className={style.navItem}>
        <NavLink to="news" className={style.navLink}>
          Новини
        </NavLink>
      </li>
      <li className={style.navItem}>
        <NavLink to="our-activity" className={style.navLink}>
          Наша діяльність
        </NavLink>
      </li>
      <li className={style.navItem}>
        <NavLink to="about-us" className={style.navLink}>
          Про нас
        </NavLink>
      </li>
    </ul>
  );
};
