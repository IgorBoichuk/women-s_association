import React from "react";
import style from "./Footer.module.scss";
import { Container } from "../shared/Container/Container";
import { Logo } from "../shared/Logo/Logo";
import { Link } from "react-router-dom";
import { Navigation } from "../shared/Navigation/Navigation";
import { SocialNetworkIcon } from "../shared/SocialLinks/SocialNetworkIcon";
import sprite from "../../assets/svg/sprite.svg";
import ButtonMain from "../shared/ButtonMain/ButtonMain";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <Container>
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
                <SocialNetworkIcon
                  width="32"
                  height="32"
                  socialNetwork="facebook"
                  description
                />
                <SocialNetworkIcon
                  width="32"
                  height="32"
                  socialNetwork="telegram"
                  description
                />
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
      </Container>
      <span className={style.rights}>
        © {year} ОМІДЗУ.
        <Link to="/privacy-policy">Політика конфіденційності</Link>
      </span>
    </footer>
  );
};
