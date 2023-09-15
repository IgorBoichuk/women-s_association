import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../../index.scss";
import style from "./CustomSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import sprite from "../../../../assets/svg/sprite.svg";
import "swiper/css/navigation";
import SkeletonCustom from "../../../shared/Skeleton/SkeletonCustom/SkeletonCustom";
const CustomSlider = ({ achievements, loading }) => {



	
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
		<div className={style.customSwiper}>
			<div className='mainWrapperForTabletSlider'>
				{loading && (
					<Swiper
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						}}
						pagination={true}
						modules={[Pagination, Navigation]}
						className='mySwiper'
						breakpoints={breakpoints}>
						{[...Array(10)].map((_, idx) => (
							<SkeletonCustom
								key={idx}
								height='24px'
								mb='12px'
							/>
						))}
					</Swiper>
				)}
				{!loading && achievements && (
					<Swiper
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						}}
						pagination={true}
						modules={[Pagination, Navigation]}
						className='mySwiper'
						breakpoints={breakpoints}>
						{achievements.map((el) => (
							<SwiperSlide key={el.id}>
								{" "}
								<div className={style.paginationWrapper}>
									<div
										className={`${style.textWrapper} ${style.contentWrapper}`}>
										<p className={style.content}>{el.text}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				)}
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
	);
};

export default CustomSlider;

// <SwiperSlide>
// 					{" "}
// 					<div className={style.paginationWrapper}>
// 						<div className={`${style.textWrapper} ${style.contentWrapper}`}>
// 							<p className={style.content}>
// 								Увійшли до книги рекордів України, як організація, яка
// 								допомогла відзначити державними нагородами за один захід
// 								найбільшу кількість матерів загиблих військових -350 батьків
// 								Героїв отрималивідзнаку «Знак пошани» та іменну «Подяку»,і 100
// 								матерів медалі «Честь.Слава.Держава»
// 							</p>
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					{" "}
// 					<div className={style.paginationWrapper}>
// 						<div className={style.contentWrapper}>
// 							<p className={style.content}>
// 								Результатом відкритого заходу «Час не лікує» в 2019 році було
// 								створення комісії Верховної Ради з розслідування обставин
// 								загибелі українських добровольців в Іловайському котлі в 2014
// 								році
// 							</p>
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					{" "}
// 					<div className={style.paginationWrapper}>
// 						<div className={`${style.textWrapper} ${style.contentWrapper}`}>
// 							<p className={style.content}>
// 								В наслідок адвокації Обʼєднання в 2020 році Житомирська
// 								обласна програма соц підтримки родин військовослужбовців
// 								збільшилася в 2,5 рази
// 							</p>
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					{" "}
// 					<div className={style.paginationWrapper}>
// 						<div className={`${style.textWrapper} ${style.contentWrapper}`}>
// 							<p className={style.content}>
// 								Соціальні відео, виготовлені організацією протягом 2016-2019
// 								років, транслювалися на 10 національних та місцевих ТВ каналах
// 								та 3 радіостанціях
// 							</p>
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					{" "}
// 					<div className={style.paginationWrapper}>
// 						<div className={`${style.textWrapper} ${style.contentWrapper}`}>
// 							<p className={style.content}>
// 								Отримали подяку від Міністра Оборони України за значний внесок
// 								в зміцнення обороноздатності Країни
// 							</p>
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					{" "}
// 					<div className={style.paginationWrapper}>
// 						<div className={`${style.textWrapper} ${style.contentWrapper}`}>
// 							<p className={style.content}>
// 								Протягом 2022 року Обʼєднання надало гуманітарну допомогу
// 								більше ніж 1500 родинам військових та родинам загиблих
// 							</p>
// 						</div>
// 					</div>
// 				</SwiperSlide>
