import React from "react";
import style from "./Hero.module.scss";
const Hero = () => {
	return (
		<div className={style.container}>
			<div className={style.containerImage}>
				<h3 className={style.title}>
					Об’єднання дружин і матерів Захисників України
				</h3>
			</div>
		</div>
	);
};

export default Hero;
