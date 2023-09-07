import React from "react";
import style from "./OurAchievements.module.scss";
import { Container } from "../../shared/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../../index.scss";
import { Pagination } from "swiper/modules";

const OurAchievements = () => {
	return (
		<Container>
			<div className={style.container}>
				<h3 className={style.title}>Наші досягнення</h3>

				<>
					<Swiper
						pagination={true}
						modules={[Pagination]}
						className='mySwiper'>
						<SwiperSlide>
							{" "}
							<div className={style.newContainer}>
								<div className={style.textWrapper}>
									<p className={style.text}>
										Увійшли до книги рекордів України, як організація, яка
										допомогла відзначити державними нагородами за один захід
										найбільшу кількість матерів загиблих військових (350 батьків
										Героїв отримали відзнаку «Знак пошани» та іменну «Подяку»,і
										100 матерів медалі «Честь.Слава.Держава» )
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<div className={style.textWrapper}>
								<p className={style.text}>
									Увійшли до книги рекордів України, як організація, яка
									допомогла відзначити державними нагородами за один захід
									найбільшу кількість матерів загиблих військових (350 батьків
									Героїв отримали відзнаку «Знак пошани» та іменну «Подяку»,і
									100 матерів медалі «Честь.Слава.Держава» )
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<div className={style.textWrapper}>
								<p className={style.text}>
									Увійшли до книги рекордів України, як організація, яка
									допомогла відзначити державними нагородами за один захід
									найбільшу кількість матерів загиблих військових (350 батьків
									Героїв отримали відзнаку «Знак пошани» та іменну «Подяку»,і
									100 матерів медалі «Честь.Слава.Держава» )
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<div className={style.textWrapper}>
								<p className={style.text}>
									Увійшли до книги рекордів України, як організація, яка
									допомогла відзначити державними нагородами за один захід
									найбільшу кількість матерів загиблих військових (350 батьків
									Героїв отримали відзнаку «Знак пошани» та іменну «Подяку»,і
									100 матерів медалі «Честь.Слава.Держава» )
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<div className={style.textWrapper}>
								<p className={style.text}>
									Увійшли до книги рекордів України, як організація, яка
									допомогла відзначити державними нагородами за один захід
									найбільшу кількість матерів загиблих військових (350 батьків
									Героїв отримали відзнаку «Знак пошани» та іменну «Подяку»,і
									100 матерів медалі «Честь.Слава.Держава» )
								</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</>
			</div>
		</Container>
	);
};

export default OurAchievements;
