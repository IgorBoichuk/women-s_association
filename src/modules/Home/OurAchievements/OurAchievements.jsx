import React from "react";
import style from "./OurAchievements.module.scss";
import { Container } from "../../shared/Container/Container";
import MobileSlider from "./MobileSlider/MobileSlider";
import TabletSlider from "./TabletSlider/TabletSlider";
import DesktopTable from "./DesktopTable/DesktopTable";

const OurAchievements = () => {
	
	return (
		<Container>
			<section className={style.container}>
				<h3 className={style.title}>Наші досягнення</h3>
				<MobileSlider />
				<TabletSlider />
				<DesktopTable />
			</section>
		</Container>
	);
};

export default OurAchievements;
