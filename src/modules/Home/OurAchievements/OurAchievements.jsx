import React from "react";
import style from "./OurAchievements.module.scss";
import { Container } from "../../shared/Container/Container";
import CustomSlider from "./CustomSlider/CustomSlider";
import DesktopTable from "./DesktopTable/DesktopTable";
import { useGetOurAchievements } from "../../../hooks/useGetOurAchievements";
import { useTranslate } from "../../../Context/ContextProvider";

const OurAchievements = ({ setLoadingAchievements }) => {
	const { isEnglish, toggleButtonFunc } = useTranslate();

	const ourAchievements = useGetOurAchievements(
		setLoadingAchievements,
		isEnglish
	);

	console.log(ourAchievements);

	return (
		<Container>
			<section className={style.section}>
				<h2 className={style.title}>Наші досягнення</h2>
				<CustomSlider />
				<DesktopTable ourAchievements={ourAchievements} />
				<button onClick={toggleButtonFunc}>CLICK ME</button>
			</section>
		</Container>
	);
};

export default OurAchievements;
