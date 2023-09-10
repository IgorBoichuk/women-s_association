import React from "react";
import style from "./OurAchievements.module.scss";
import { Container } from "../../shared/Container/Container";
import MobileSlider from "./MobileSlider/MobileSlider";
import TabletSlider from "./TabletSlider/TabletSlider";
import DesktopTable from "./DesktopTable/DesktopTable";

const OurAchievements = () => {
	
	return (
		<Container>
			<section >
				<h2 className={style.title}>Наші досягнення</h2>
				<MobileSlider />
				<TabletSlider />
				<DesktopTable />
			</section>
		</Container>
	);
};

export default OurAchievements;
