import React from "react";
import style from "./Statistics.module.scss";
import { Container } from "../../shared/Container/Container";
import sprite from "../../../assets/svg/sprite.svg";

export const Statistics = () => {
  return (
    <section className={style.section}>
      <Container mb0>
        <h3 className={style.sectionTitle}>
          Разом з вами ми робимо великі справи
        </h3>
        <div className={style.list}>
          <div className={style.itemWrapper}>
            <div className={style.iconWrapper}>
              <svg width="46" height="46" className={style.vector}>
                <use xlinkHref={`${sprite}#vector`}></use>
              </svg>
              <svg width="30" height="30" className={style.vectorIcon}>
                <use xlinkHref={`${sprite}#group`}></use>
              </svg>
            </div>
            <p className={style.itemTitle}>Понад 2500 жінок</p>
            <span className={style.itemDescription}>
              є членкинями Організації, постійно працює мережа з 40 груп
              взаємопідтримки «рівний-рівному»
            </span>
          </div>
          <div className={style.itemWrapper}>
            <div className={style.iconWrapper}>
              <svg width="46" height="46" className={style.vector}>
                <use xlinkHref={`${sprite}#vector`}></use>
              </svg>
              <svg width="30" height="30" className={style.vectorIcon}>
                <use xlinkHref={`${sprite}#ukraine`}></use>
              </svg>
            </div>
            <p className={style.itemTitle}>14 регіонів</p>
            <span className={style.itemDescription}>
              охоплені підтримкою нашої організації
            </span>
          </div>
          <div className={style.itemWrapper}>
            <div className={style.iconWrapper}>
              <svg width="46" height="46" className={style.vector}>
                <use xlinkHref={`${sprite}#vector`}></use>
              </svg>
              <svg width="30" height="30" className={style.vectorIcon}>
                <use xlinkHref={`${sprite}#prijects`}></use>
              </svg>
            </div>
            <p className={style.itemTitle}>40+ проектів</p>
            <span className={style.itemDescription}>
              реалізували за 9 років роботи за участі більше ніж 7000 учасників
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
