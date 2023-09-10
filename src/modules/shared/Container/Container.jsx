import React from "react";
import style from "./Container.module.scss";

export const Container = ({ children, mb0 }) => {
   const containerClass = mb0 ? `${style.container} ${style.mb0}` : `${style.container} ${style.mb100}`;
  return <div className={containerClass}>{children}</div>;
};
