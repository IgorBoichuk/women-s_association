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
							spaceBetween={24}>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>
									<p className={style.content}>
										Увійшли до книги рекордів України, як організація, яка
										допомогла відзначити державними нагородами за один захід
										найбільшу кількість матерів загиблих військових (350 батьків
										Героїв отримали відзнаку «Знак пошани» та іменну «Подяку»,і
										100 матерів медалі «Честь.Слава.Держава»)
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>
									<p className={style.content}>
										Результатом відкритого заходу «Час не лікує» в 2019 році було
										створення комісії Верховної Ради з розслідування обставин
										загибелі українських добровольців в Іловайському котлі в 2014
										році
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>
									<p className={style.content}>
										2. Увійшли до книги рекордів України, як організація, яка
										допомогла відзначити державними нагородами за один захід
										найбільшу кількість матерів загиблих військових (350 батьків
										Героїв отримали відзнаку «Знак пошани» та іменну «Подяку»,і
										100 матерів медалі «Честь.Слава.Держава»)
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>
									<p className={style.content}>
										2. Результатом відкритого заходу «Час не лікує» в 2019 році
										було створення комісії Верховної Ради з розслідування обставин
										загибелі українських добровольців в Іловайському котлі в 2014
										році
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>
									<p className={style.content}>
										3. Увійшли до книги рекордів України, як організація, яка
										допомогла відзначити державними нагородами за один захід
										найбільшу кількість матерів загиблих військових (350 батьків
										Героїв отримали відзнаку «Знак пошани» та іменну «Подяку»,і
										100 матерів медалі «Честь.Слава.Держава»)
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={style.swiper}>
								<div className={style.contentWrapper}>
									<p className={style.content}>
										3. Результатом відкритого заходу «Час не лікує» в 2019 році
										було створення комісії Верховної Ради з розслідування обставин
										загибелі українських добровольців в Іловайському котлі в 2014
										році
									</p>
								</div>
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
