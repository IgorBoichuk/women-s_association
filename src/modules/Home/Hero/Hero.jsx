import React from "react";
import style from "./Hero.module.scss";
import { Container } from "../../shared/Container/Container";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";
const Hero = () => {
	return (
		<section className={style.container}>
			<div className={style.containerImage}>
				<div className={style.textWrapper}>
					<h3 className={style.titleTablet}>
						Об’єднання дружин і матерів Захисників України
					</h3>
					<p className={style.titleDescriptionTablet}>
						Ми - жінки з родин воїнів російсько-української війни,
						<br />
						об'єдналися для розвитку активного громадянського <br />
						суспільства в Україні
					</p>
				</div>
				<div className={style.buttonContainerTablet}>
					<ButtonMain color={"yellow"}>Хочу допомогти</ButtonMain>
					<ButtonMain>Потрібна допомога</ButtonMain>
				</div>
			</div>
			<div className={style.mobWrapper}>
				<Container>
					<h3 className={style.titleSeparate}>
						Об’єднання дружин і матерів Захисників України
					</h3>
					<p className={style.titleDescription}>
						Ми - жінки з родин воїнів російсько-української війни, об'єдналися
						для розвитку активного громадянського суспільства в Україні
					</p>
					<div className={style.buttonContainer}>
						<ButtonMain color={"yellow"}>Хочу допомогти</ButtonMain>
						<ButtonMain>Потрібна допомога</ButtonMain>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default Hero;
