import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";
import { useGetNavList } from "../../../hooks/header/useGetNavList";
import SkeletonCustom from "../Skeleton/SkeletonCustom/SkeletonCustom";

export const Navigation = ({ footer, close }) => {
  const { navList, loadingNavList } = useGetNavList();

  return (
    <>
      {loadingNavList && (
        <div className={style.skeletonWrapper}>
          {[...Array(4)].map((_, idx) => (
            <SkeletonCustom key={idx} width="100px" height="20px" mb="0px" />
          ))}
        </div>
      )}
      {!loadingNavList && navList && (
        <ul className={footer ? style.navListFooter : style.navList}>
          {navList.map((el) => (
            <NavLink to={el.route} className={style.navLink} onClick={close}>
              <li key={el.id} className={style.navItem}>
                {el.text}
              </li>
            </NavLink>
          ))}
        </ul>
      )}
    </>
  );
};
