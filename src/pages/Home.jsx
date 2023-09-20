import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import Hero from "../modules/Home/Hero/Hero";
import OurAchievements from "../modules/Home/OurAchievements/OurAchievements";
import Stories from "../modules/Home/Stories/Stories";
import { Statistics } from "../modules/Home/Statistics/Statistics";

import { Invitation } from "../modules/Home/Invitation/Invitation";
import ButtonContactUs from "../modules/ButtonContactUs/ButtonContactUs";

export const Home = () => {
	const [isVisible, setIsVisible] = useState(true);
	return (
		<>
			{/* <NavModal /> */}
			<Hero />
			<OurAchievements />
			<Stories />
			<Statistics />
			<Invitation />
			<ScrollTrigger
				onEnter={() => setIsVisible(false)}
				onExit={() => setIsVisible(true)}>
				<div></div>
			</ScrollTrigger>
			{isVisible && <ButtonContactUs />}
		</>
	);
};
