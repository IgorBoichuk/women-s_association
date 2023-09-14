import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../index.scss";
import "swiper/css/navigation";
import style from "./Stories.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Container } from "../../shared/Container/Container";
import sprite from "../../../assets/svg/sprite.svg";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";
const Stories = () => {
  const breakpoints = {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24,
    },
  };
  return (
    <section className={style.section}>
      <Container>
        <h2 className={style.title}>Історії, які надихають</h2>
        <div className={style.swiperMobile}>
          <div className="mainWrapperForStorySlider">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next1",
                prevEl: ".swiper-button-prev1",
              }}
              pagination={true}
              modules={[Pagination, Navigation]}
              className="myStorySwiper"
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                {" "}
                <div className={style.paginationWrapper}>
                  <div className={style.photo}></div>
                  <div className={style.storyWrapper}>
                    <h3 className={style.storyTitle}>
                      Малі дії, Великі зміни{" "}
                    </h3>
                    <p className={style.storyText}>
                      Деякі невеликі дії можуть породити неймовірні зміни, і ця
                      історія показує, як спільнота з'єдналася для створення
                      позитивного впливу на світ навколо.
                    </p>

                    <div className={style.iconWrapper}>
                      <svg className={style.clockIcon}>
                        <use xlinkHref={`${sprite}#icon-time`}></use>
                      </svg>
                      <span>5 хвилин</span>
                    </div>
                    <div className={style.desktopWrapper}>
                      <ButtonMain maxW={"max-content"}>Детальніше</ButtonMain>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.paginationWrapper}>
                  <div className={style.photo}></div>
                  <div className={style.storyWrapper}>
                    <h3 className={style.storyTitle}>
                      Малі дії, Великі зміни{" "}
                    </h3>
                    <p className={style.storyText}>
                      Деякі невеликі дії можуть породити неймовірні зміни, і ця
                      історія показує, як спільнота з'єдналася для створення
                      позитивного впливу на світ навколо.
                    </p>

                    <div className={style.iconWrapper}>
                      <svg className={style.clockIcon}>
                        <use xlinkHref={`${sprite}#icon-time`}></use>
                      </svg>
                      <span>5 хвилин</span>
                    </div>
                    <div className={style.desktopWrapper}>
                      <ButtonMain maxW={"max-content"}>Детальніше</ButtonMain>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.paginationWrapper}>
                  <div className={style.photo}></div>
                  <div className={style.storyWrapper}>
                    <h3 className={style.storyTitle}>
                      Малі дії, Великі зміни{" "}
                    </h3>
                    <p className={style.storyText}>
                      Деякі невеликі дії можуть породити неймовірні зміни, і ця
                      історія показує, як спільнота з'єдналася для створення
                      позитивного впливу на світ навколо.
                    </p>

                    <div className={style.iconWrapper}>
                      <svg className={style.clockIcon}>
                        <use xlinkHref={`${sprite}#icon-time`}></use>
                      </svg>
                      <span>5 хвилин</span>
                    </div>
                    <div className={style.desktopWrapper}>
                      <ButtonMain maxW={"max-content"}>Детальніше</ButtonMain>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.paginationWrapper}>
                  <div className={style.photo}></div>
                  <div className={style.storyWrapper}>
                    <h3 className={style.storyTitle}>
                      Малі дії, Великі зміни{" "}
                    </h3>
                    <p className={style.storyText}>
                      Деякі невеликі дії можуть породити неймовірні зміни, і ця
                      історія показує, як спільнота з'єдналася для створення
                      позитивного впливу на світ навколо.
                    </p>

                    <div className={style.iconWrapper}>
                      <svg className={style.clockIcon}>
                        <use xlinkHref={`${sprite}#icon-time`}></use>
                      </svg>
                      <span>5 хвилин</span>
                    </div>
                    <div className={style.desktopWrapper}>
                      <ButtonMain maxW={"max-content"}>Детальніше</ButtonMain>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.paginationWrapper}>
                  <div className={style.photo}></div>
                  <div className={style.storyWrapper}>
                    <h3 className={style.storyTitle}>
                      Малі дії, Великі зміни{" "}
                    </h3>
                    <p className={style.storyText}>
                      Деякі невеликі дії можуть породити неймовірні зміни, і ця
                      історія показує, як спільнота з'єдналася для створення
                      позитивного впливу на світ навколо.
                    </p>

                    <div className={style.iconWrapper}>
                      <svg className={style.clockIcon}>
                        <use xlinkHref={`${sprite}#icon-time`}></use>
                      </svg>
                      <span>5 хвилин</span>
                    </div>
                    <div className={style.desktopWrapper}>
                      <ButtonMain maxW={"max-content"}>Детальніше</ButtonMain>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next1">
              <svg>
                <use xlinkHref={`${sprite}#icon-right`}></use>
              </svg>
            </div>
            <div className="swiper-button-prev1">
              <svg>
                <use xlinkHref={`${sprite}#icon-left`}></use>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stories;
