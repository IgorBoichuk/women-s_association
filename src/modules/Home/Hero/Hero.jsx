import React from "react";
import style from "./Hero.module.scss";
const Hero = () => {
	return (
		<section className={style.container}>
			<div className={style.containerImage}>
				<h3 className={style.titleTablet}>
					Об’єднання дружин і матерів Захисників України
				</h3>
			</div>
			<h3 className={style.titleSeparate}>
				Об’єднання дружин і матерів Захисників України
			</h3>
			<p className={style.titleDescription}>
				Ми - жінки з родин воїнів російсько-української війни, об'єдналися для
				розвитку активного громадянського суспільства в Україні
			</p>
			<div className={style.buttonContainer}></div>
		</section>
	);
};

export default Hero;
