import React, { useState } from "react";
import Hero from "../modules/Home/Hero/Hero";
import OurAchievements from "../modules/Home/OurAchievements/OurAchievements";
import Stories from "../modules/Home/Stories/Stories";
import { Statistics } from "../modules/Home/Statistics/Statistics";

export const Home = () => {
  const [loadingAchievements, setLoadingAchievements] = useState(false);

  return (
		<>
			<Hero />
			<OurAchievements setLoadingAchievements={setLoadingAchievements} />
			<Stories />
			{/* <Statistics /> */}
		</>
	);
};
