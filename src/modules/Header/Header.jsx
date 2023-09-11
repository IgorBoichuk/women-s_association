import React from "react";
import style from "./Header.module.scss";
import sprite from "../../assets/svg/sprite.svg";
import { Navigation } from "../shared/Navigation/Navigation";
import { Logo } from "../shared/Logo/Logo";
import { Container } from "../shared/Container/Container";
import { LanguageSwitcher } from "../shared/LanguageSwitcher/LanguageSwitcher";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container mb0={true}>
      <header className={style.header}>
        <Link to="/" className={style.headerLink}>
          <Logo />
        </Link>
        <nav className={style.navMenu}>
          <Navigation />
        </nav>
        <button className={style.button}>Підтримати</button>
        <button className={style.burgerBtn}>
          <svg className={style.menuBtn} width="24" height="24">
            <use xlinkHref={`${sprite}#menu`}></use>
          </svg>
        </button>
        <LanguageSwitcher />
      </header>
    </Container>
  );
};
