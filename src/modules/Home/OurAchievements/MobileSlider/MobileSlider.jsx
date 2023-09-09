import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "../../../../index.scss";
import style from "./MobileSlider.module.scss"
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
							<p className={style.text}>
								1.Увійшли до книги рекордів України, як організація, яка допомогла
								відзначити державними нагородами за один захід найбільшу
								кількість матерів загиблих військових (350 батьків Героїв
								отримали відзнаку «Знак пошани» та іменну «Подяку»,і 100 матерів
								медалі «Честь.Слава.Держава» )
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div className={style.paginationWrapper}>
						<div className={style.textWrapper}>
							<p className={style.text}>
								2.Увійшли до книги рекордів України, як організація, яка допомогла
								відзначити державними нагородами за один захід найбільшу
								кількість матерів загиблих військових (350 батьків Героїв
								отримали відзнаку «Знак пошани» та іменну «Подяку»,і 100 матерів
								медалі «Честь.Слава.Держава» )
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div className={style.paginationWrapper}>
						<div className={style.textWrapper}>
							<p className={style.text}>
								3.Увійшли до книги рекордів України, як організація, яка допомогла
								відзначити державними нагородами за один захід найбільшу
								кількість матерів загиблих військових (350 батьків Героїв
								отримали відзнаку «Знак пошани» та іменну «Подяку»,і 100 матерів
								медалі «Честь.Слава.Держава» )
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div className={style.paginationWrapper}>
						<div className={style.textWrapper}>
							<p className={style.text}>
								4.Увійшли до книги рекордів України, як організація, яка допомогла
								відзначити державними нагородами за один захід найбільшу
								кількість матерів загиблих військових (350 батьків Героїв
								отримали відзнаку «Знак пошани» та іменну «Подяку»,і 100 матерів
								медалі «Честь.Слава.Держава» )
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div className={style.paginationWrapper}>
						<div className={style.textWrapper}>
							<p className={style.text}>
								5.Увійшли до книги рекордів України, як організація, яка допомогла
								відзначити державними нагородами за один захід найбільшу
								кількість матерів загиблих військових (350 батьків Героїв
								отримали відзнаку «Знак пошани» та іменну «Подяку»,і 100 матерів
								медалі «Честь.Слава.Держава» )
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default MobileSlider
