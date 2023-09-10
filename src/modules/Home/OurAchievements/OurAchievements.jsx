import React from "react";
import style from "./OurAchievements.module.scss";
import { Container } from "../../shared/Container/Container";
import MobileSlider from "./MobileSlider/MobileSlider";
import TabletSlider from "./TabletSlider/TabletSlider";

const OurAchievements = () => {
	
	return (
		<Container>
			<section className={style.container}>
				<h3 className={style.title}>Наші досягнення</h3>
				<MobileSlider />
				<TabletSlider />
			</section>
		</Container>
	);
};

export default OurAchievements;
