import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import Hero from "../modules/Home/Hero/Hero";
import OurAchievements from "../modules/Home/OurAchievements/OurAchievements";
import Stories from "../modules/Home/Stories/Stories";
import { Statistics } from "../modules/Home/Statistics/Statistics";

import { Invitation } from "../modules/Home/Invitation/Invitation";
import ButtonContactUs from "../modules/Home/ButtonContactUs/ButtonContactUs";
import Modal from "../modules/shared/Modal/Modal";
import PartnerForm from "../modules/shared/Modal/PartnerForm/PartnerForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Home = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [modalPartner, setModalPartner] = useState(false);
	return (
		<>
			<ToastContainer />
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
			{isVisible && <ButtonContactUs onClick={() => setModalPartner(true)} />}
			<Modal
				visible={modalPartner}
				setVisible={setModalPartner}>
				<PartnerForm modalClose={() => setModalPartner(false)} />
			</Modal>
		</>
	);
};
