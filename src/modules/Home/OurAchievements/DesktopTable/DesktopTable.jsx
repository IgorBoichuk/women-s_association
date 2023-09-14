import React from 'react'
import style from './DesktopTable.module.scss'
const DesktopTable = ({ ourAchievements }) => {
	return <ul className={style.achievementsList}>
		
		<li  className={style.achievementEl}>
				<div className={style.contentWrapper}>
					{/* !! MAX SYMBOLS 288 WITH BACKSPACES */}
					<p className={style.content}>
						
					</p>
				</div>
			</li>
	</ul>;
};

export default DesktopTable


			// <li className={style.achievementEl}>
			// 	<div className={style.contentWrapper}>
			// 		{/* !! MAX SYMBOLS 288 WITH BACKSPACES */}
			// 		<p className={style.content}>
			// 			Увійшли до книги рекордів України, як організація, яка допомогла
			// 			відзначити державними нагородами за один захід найбільшу кількість
			// 			матерів загиблих військових -350 батьків Героїв отрималивідзнаку
			// 			«Знак пошани» та іменну «Подяку»,і 100 матерів медалі
			// 			«Честь.Слава.Держава»{" "}
			// 		</p>
			// 	</div>
			// </li>
			// <li className={style.achievementEl}>
			// 	<div className={style.contentWrapper}>
			// 		<p className={style.content}>
			// 			Результатом відкритого заходу «Час не лікує» в 2019 році було
			// 			створення комісії Верховної Ради з розслідування обставин загибелі
			// 			українських добровольців в Іловайському котлі в 2014 році
			// 		</p>
			// 	</div>
			// </li>
			// <li className={style.achievementEl}>
			// 	<div className={style.contentWrapper}>
			// 		<p className={style.content}>
			// 			В наслідок адвокації Обʼєднання в 2020 році Житомирська обласна
			// 			програма соц підтримки родин військовослужбовців збільшилася в 2,5
			// 			рази
			// 		</p>
			// 	</div>
			// </li>
			// <li className={style.achievementEl}>
			// 	<div className={style.contentWrapper}>
			// 		<p className={style.content}>
			// 			Соціальні відео, виготовлені організацією протягом 2016-2019 років,
			// 			транслювалися на 10 національних та місцевих ТВ каналах та 3
			// 			радіостанціях
			// 		</p>
			// 	</div>
			// </li>
			// <li className={style.achievementEl}>
			// 	<div className={style.contentWrapper}>
			// 		<p className={style.content}>
			// 			Отримали подяку від Міністра Оборони України за значний внесок в
			// 			зміцнення обороноздатності Країни
			// 		</p>
			// 	</div>
			// </li>
			// <li className={style.achievementEl}>
			// 	<div className={style.contentWrapper}>
			// 		<p className={style.content}>
			// 			Протягом 2022 року Обʼєднання надало гуманітарну допомогу більше ніж
			// 			1500 родинам військових та родинам загиблих
			// 		</p>
			// 	</div>
			// </li>