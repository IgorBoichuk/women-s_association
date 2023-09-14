import React from "react";
import style from "./Container.module.scss";

// export const Container = ({ children, mb0 }) => {
//    const containerClass = mb0 ? `${style.container} ${style.mb0}` : `${style.container} ${style.mb100}`;
//   return <div className={containerClass}>{children}</div>;
// };

export const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
