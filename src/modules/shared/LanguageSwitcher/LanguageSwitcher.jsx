import React from "react";
import style from "./LangugeSwitcher.module.scss";
import { useLanguage } from "../../../Context/LanguageProvider";

export const LanguageSwitcher = (modal) => {
  const { languages, currentLanguage, toggleLanguage } = useLanguage();

  return (
    <div className={style.langWrapper}>
      {Object.keys(languages).map((langCode) => (
        <span
          key={langCode}
          onClick={() => toggleLanguage(langCode)}
          className={
            currentLanguage === langCode
              ? `${style.lang} ${style.active}`
              : `${style.lang}`
          }
        >
          {languages[langCode]}
        </span>
      ))}
    </div>
  );
};
