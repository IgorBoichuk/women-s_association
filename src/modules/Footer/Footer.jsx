import React from "react";
import style from "./Footer.module.scss";
import { Container } from "../shared/Container/Container";
import { Logo } from "../shared/Logo/Logo";
import { Link } from "react-router-dom";
import { Navigation } from "../shared/Navigation/Navigation";
import sprite from "../../assets/svg/sprite.svg";
import ButtonMain from "../shared/ButtonMain/ButtonMain";

export const Footer = () => {
  return (
    <Container>
      <footer className={style.footer}>
        <div className={style.footerWrapper}>
          <div className={style.leftSideWrapper}>
            <Link to="/" className={style.footerLink}>
              <Logo footerLogo />
            </Link>
            <div className={style.contactsWrapper}>
              <p className={style.contacts}>Контакти</p>
              <a
                href="https://goo.gl/maps/bFUT3RcPgrz7La6s9"
                target="blank"
                className={style.adressLink}
              >
                <p className={style.adress}>
                  Україна, м.Київ, вул. Гарматна, буд.31
                </p>
              </a>
              <a href="mailto:info.familyato@gmail.com" className={style.email}>
                <svg width="24" height="24" className={style.emailIcon}>
                  <use xlinkHref={`${sprite}#email`}></use>
                </svg>
                info.familyato@gmail.com
              </a>
              <div className={style.social}>
                <Link className={style.socialLink}>
                  <svg width="32" height="32" className={style.socialIcon}>
                    <use xlinkHref={`${sprite}#facebook`}></use>
                  </svg>
                  <span>Facebook</span>
                </Link>
                <Link className={style.socialLink}>
                  <svg width="32" height="32" className={style.socialIcon}>
                    <use xlinkHref={`${sprite}#telegram`}></use>
                  </svg>
                  <span>Telegram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.footerNav}>
            <Navigation footer />
          </div>
          <form action="submit" className={style.footerform}>
            <p className={style.footerformName}>Зв’язатися з нами</p>
            <input
              type="email"
              placeholder="Електронна адреса"
              className={style.inputEmail}
            />
            <input
              type="text"
              placeholder="Коментар"
              className={style.inputText}
            />
            <ButtonMain color="yellow" children="Відправити" />
          </form>
        </div>
        <span className={style.rights}>
          © 2023 ОМІДЗУ. All Rights Reserved.
        </span>
      </footer>
    </Container>
  );
};
