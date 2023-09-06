import React from "react";
import style from "./Header.module.scss";
import sprite from "../../assets/svg/sprite.svg";
import { Navigation } from "../shared/Navigation/Navigation";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logoRapper}>
        <svg className={style.logo} width="42" height="42">
          <use xlinkHref={`${sprite}#logo`}></use>
        </svg>
      </div>
      <nav className={style.navMenu}>
        <Navigation />
      </nav>
      <button className={style.button}>Підтримати</button>
      <button className={style.burgerBtn}>
        <svg className={style.menuBtn} width="24" height="24">
          <use xlinkHref={`${sprite}#menu`}></use>
        </svg>
      </button>
    </header>
  );
};
