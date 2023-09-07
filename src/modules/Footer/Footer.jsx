import React from "react";
import style from "./Footer.module.scss";
import { Container } from "../shared/Container/Container";
import { Logo } from "../shared/Logo/Logo";
import { Link } from "react-router-dom";
import sprite from "../../assets/svg/sprite.svg";

export const Footer = () => {
  return (
    <Container>
      <footer className={style.footer}>
        <Logo footerLogo />
        <div className={style.contactsWrapper}>
          <p className={style.contacts}>Контакти</p>
          <p className={style.adress}>Україна, м.Київ, вул. Гарматна, буд.31</p>
          <Link to="info.familyato@gmail.com" className={style.email}>
            <svg width="24" height="24" className={style.emailIcon}>
              <use xlinkHref={`${sprite}#email`}></use>
            </svg>
            info.familyato@gmail.com
          </Link>
          <div className={style.social}>
            <svg width="32" height="32" className={style.socialIcon}>
              <use xlinkHref={`${sprite}#facebook`}></use>
            </svg>
            <svg width="32" height="32" className={style.socialIcon}>
              <use xlinkHref={`${sprite}#telegram`}></use>
            </svg>
          </div>
        </div>
      </footer>
    </Container>
  );
};
