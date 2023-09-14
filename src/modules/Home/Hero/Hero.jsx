import React from "react";
import style from "./Hero.module.scss";
import { Container } from "../../shared/Container/Container";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";
import { useGetHeroContent } from "../../../hooks/useGetHeroContent";
import { useGetOurAchievements, useGetSingleProblem } from "../../../hooks/useGetOurAchievements";

const Hero = () => {
	const achievement = useGetSingleProblem("hero_en");
	console.log(achievement);
	return (
		<section className={style.container}>
			<div className={style.containerImage}>
				<div className={style.textWrapper}>
					<h1 className={style.titleTablet}>
						Об’єднання дружин і матерів Захисників України
					</h1>
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
					<h1 className={style.titleSeparate}>
						Об’єднання дружин і матерів Захисників України
					</h1>
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
