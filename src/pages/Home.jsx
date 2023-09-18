import React from "react";
import Hero from "../modules/Home/Hero/Hero";
import OurAchievements from "../modules/Home/OurAchievements/OurAchievements";
import Stories from "../modules/Home/Stories/Stories";
import { Statistics } from "../modules/Home/Statistics/Statistics";
import { NavModal } from "../modules/shared/NavModal/NavModal";

export const Home = () => {
  return (
    <>
      {/* <NavModal /> */}
      <Hero />
      <OurAchievements />
      <Stories />
      <Statistics />
    </>
  );
};
