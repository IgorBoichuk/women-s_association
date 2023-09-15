import React from "react";
import style from "./OurAchievements.module.scss";
import { Container } from "../../shared/Container/Container";
import CustomSlider from "./CustomSlider/CustomSlider";
import DesktopTable from "./DesktopTable/DesktopTable";
import { useGetOurAchievements } from "../../../hooks/home/our-achievements/useGetOurAchievements";
import { useGetAchievementsTitle } from "../../../hooks/home/our-achievements/useGetAchievementsTitle";

const OurAchievements = () => {
	const { achievements, loadingAchievements } = useGetOurAchievements();
    const { title, loadingTitle } = useGetAchievementsTitle();
    
	return (
		<Container>
			<section className={style.section}>
				{!loadingTitle && title && (
					<h2 className={style.title}>{title.title}</h2>
				)}

				{!loadingAchievements && (
					<>
						<CustomSlider achievements={achievements} />
						<DesktopTable achievements={achievements} />
					</>
				)}
			</section>
		</Container>
	);
};

export default OurAchievements;
