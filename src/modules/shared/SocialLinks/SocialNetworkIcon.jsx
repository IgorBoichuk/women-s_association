import React from "react";
import style from "./SocialNetworkIcon.module.scss";
import sprite from "../../../assets/svg/sprite.svg";

export const SocialNetworkIcon = ({
  socialNetwork,
  description,
  width,
  height,
}) => {
  let socialLink;
  switch (socialNetwork) {
    case "telegram":
      socialLink = "https://desktop.telegram.org/";
      break;
    case "facebook":
      socialLink = "https://www.facebook.com/familyato/?locale=uk_UK";
      break;

    default:
      break;
  }

  return (
    <a href={socialLink} target="blank" className={style.socialLink}>
      <svg width={width} height={height} className={style.socialIcon}>
        <use xlinkHref={`${sprite}#${socialNetwork}`}></use>
      </svg>
      {description ? socialNetwork : null}
    </a>
  );
};
