import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../index.scss";
import style from "./Stories.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Container } from "../../shared/Container/Container";
import sprite from "../../../assets/svg/sprite.svg"
const Stories = () => {
    const breakpoints = {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 24,
        },
    }
	return (
		<Container>
			<section className={style.section}>
				<h2 className={style.title}>Історії, які надихають</h2>
				<div className={style.swiperMobile}>
					<Swiper
						navigation={{
							nextEl: ".swiper-button-next1",
							prevEl: ".swiper-button-prev2",
						}}
						pagination={true}
						breakpoints={breakpoints}
						modules={[Pagination, Navigation]}
						className='myStorySwiper'>
						<SwiperSlide>
							{" "}
							<div className={style.paginationWrapper}>
								<div className={style.contentWrapper}>
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
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={style.paginationWrapper}>
								<div className={style.contentWrapper}>
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
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={style.paginationWrapper}>
								<div className={style.contentWrapper}>
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
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</Container>
	);
};

export default Stories;
