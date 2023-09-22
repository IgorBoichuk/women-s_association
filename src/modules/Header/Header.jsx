import React from "react";
import style from "./Header.module.scss";
import sprite from "../../assets/svg/sprite.svg";
import { Navigation } from "../shared/Navigation/Navigation";
import { Logo } from "../shared/Logo/Logo";
import { Container } from "../shared/Container/Container";
import { LanguageSwitcher } from "../shared/LanguageSwitcher/LanguageSwitcher";
import { Link } from "react-router-dom";
import { useGetButtonText } from "../../hooks/header/useGetButtonText";
import SkeletonCustom from "../shared/Skeleton/SkeletonCustom/SkeletonCustom";
import { useModal } from "../../hooks/useModal";
import { NavModal } from "../shared/NavModal/NavModal";
import { SocialNetworkIcon } from "../shared/SocialLinks/SocialNetworkIcon";
import ButtonMain from "../shared/ButtonMain/ButtonMain";

export const Header = () => {
  const { button, loadingButton } = useGetButtonText();
  const { isOpen, toggle } = useModal();

  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          <Link to="/" className={style.headerLink}>
            <Logo />
          </Link>
          <nav className={style.navMenu}>
            <Navigation />
          </nav>
          <div className={style.socialLink}>
            {!loadingButton && button && (
              <SocialNetworkIcon
                socialNetwork="facebook"
                width="46"
                height="46"
              />
            )}
          </div>
          {loadingButton && <SkeletonCustom />}
          {!loadingButton && button && (
            <ButtonMain
              color={"yellow"}
              maxW={"150px"}
              className={style.button}
            >
              {button.text}
            </ButtonMain>
          )}
          <button className={style.burgerBtn} onClick={toggle}>
            <svg className={style.menuBtn} width="24" height="24">
              <use xlinkHref={`${sprite}#menu`}></use>
            </svg>
          </button>
          <div className={style.langSwitcher}>
            {!loadingButton && <LanguageSwitcher />}
          </div>
        </div>
        {isOpen && <NavModal close={toggle} />}
      </Container>
    </header>
  );
};
