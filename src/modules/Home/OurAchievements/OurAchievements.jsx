import React from "react";
import style from "./OurAchievements.module.scss";
import { Container } from "../../shared/Container/Container";
import CustomSlider from "./CustomSlider/CustomSlider";
import DesktopTable from "./DesktopTable/DesktopTable";

const OurAchievements = () => {
	
	return (
		<Container>
			<section className={style.section}>
				<h2 className={style.title}>Наші досягнення</h2>
				<CustomSlider />
				<DesktopTable />
			</section>
		</Container>
	);
};

export default OurAchievements;
