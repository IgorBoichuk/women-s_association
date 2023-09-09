import React from "react";
import style from "./OurAchievements.module.scss";
import { Container } from "../../shared/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import sprite from "../../../assets/svg/sprite.svg";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import MobileSlider from "./MobileSlider/MobileSlider";

const OurAchievements = () => {
	return (
		<Container>
			<section className={style.container}>
				<h3 className={style.title}>Наші досягнення</h3>
				<MobileSlider />

				<div className={style.sliderContainer}>
					<div className='mainWrapperForSlider'>
						<Swiper
							navigation={{
								nextEl: ".swiper-button-next",
								prevEl: ".swiper-button-prev",
							}}
							modules={[Navigation]}
							className='mySwiper'
							slidesPerView={2}
							slidesPerGroup={2}
							spaceBetween={24}
							>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>Slide 1</div>
							</SwiperSlide>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>Slide 2</div>
							</SwiperSlide>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>Slide 3</div>
							</SwiperSlide>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>Slide 4</div>
							</SwiperSlide>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>Slide 5</div>
							</SwiperSlide>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>Slide 6</div>
							</SwiperSlide>
						</Swiper>

						<div className='swiper-button-next'>
							<svg>
								<use xlinkHref={`${sprite}#icon-right`}></use>
							</svg>
						</div>
						<div className='swiper-button-prev'>
							<svg>
								<use xlinkHref={`${sprite}#icon-left`}></use>
							</svg>
						</div>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default OurAchievements;
