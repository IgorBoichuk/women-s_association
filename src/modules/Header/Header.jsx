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
import { Facebook } from "../shared/SocialLinks/Facebook";

export const Header = () => {
  const { button, loadingButton } = useGetButtonText();
  const { isOpen, toggle } = useModal();
 console.log(isOpen);
	return (
		<header className={style.header}>
			<Container>
				<div className={style.headerWrapper}>
					<Link
						to='/'
						className={style.headerLink}>
						<Logo />
					</Link>
					<nav className={style.navMenu}>
						<Navigation />
					</nav>
					<Link className={style.socialLink}>
						{!loadingButton && button && (
							<svg
								width='46'
								height='46'
								className={style.socialIcon}>
								<use xlinkHref={`${sprite}#facebook`}></use>
							</svg>
						)}
					</Link>
					{loadingButton && <SkeletonCustom />}
					{!loadingButton && button && (
						<button className={style.button}>{button.text}</button>
					)}
					<button className={style.burgerBtn} onClick={toggle}>
						<svg
							className={style.menuBtn}
							width='24'
							height='24'>
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
