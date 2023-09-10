import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../../index.scss";
import style from "./MobileSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const MobileSlider = () => {
	return (
		<div className={style.swiperMobile}>
			<Swiper
				pagination={true}
				modules={[Pagination]}
				className='mySwiper'>
				<SwiperSlide>
					{" "}
					<div className={style.paginationWrapper}>
						<div className={style.textWrapper}>
							<p>
								Увійшли до книги рекордів України, як організація, яка допомогла
								відзначити державними нагородами за один захід найбільшу
								кількість матерів загиблих військових -350 батьків Героїв
								отрималивідзнаку «Знак пошани» та іменну «Подяку»,і 100 матерів
								медалі «Честь.Слава.Держава»
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div className={style.paginationWrapper}>
						<div className={style.textWrapper}>
							<p>
								Результатом відкритого заходу «Час не лікує» в 2019 році було
								створення комісії Верховної Ради з розслідування обставин
								загибелі українських добровольців в Іловайському котлі в 2014
								році
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div className={style.paginationWrapper}>
						<div className={style.textWrapper}>
							<p>
								В наслідок адвокації Обʼєднання в 2020 році Житомирська обласна
								програма соц підтримки родин військовослужбовців збільшилася в
								2,5 рази
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div className={style.paginationWrapper}>
						<div className={style.textWrapper}>
							<p>
								Соціальні відео, виготовлені організацією протягом 2016-2019
								років, транслювалися на 10 національних та місцевих ТВ каналах
								та 3 радіостанціях
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div className={style.paginationWrapper}>
						<div className={style.textWrapper}>
							<p>
								Отримали подяку від Міністра Оборони України за значний внесок в
								зміцнення обороноздатності Країни
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div className={style.paginationWrapper}>
						<div className={style.textWrapper}>
							<p>
								Протягом 2022 року Обʼєднання надало гуманітарну допомогу більше
								ніж 1500 родинам військових та родинам загиблих
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default MobileSlider;
