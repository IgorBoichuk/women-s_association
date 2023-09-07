import React from "react";
import style from "./LangugeSwitcher.module.scss";

export const LanguageSwitcher = () => {
  return (
    <div className={style.langWrapper}>
      <span className={style.langUa}>UA</span>
      <span className={style.langEng}>ENG</span>
    </div>
  );
};
