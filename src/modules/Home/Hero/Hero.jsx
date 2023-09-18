import React, { useState } from "react";
import style from "./Hero.module.scss";
import { Container } from "../../shared/Container/Container";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";
import { useGetHeroContent } from "../../../hooks/home/hero/useGetHeroContent";
import { useGetBgWithGradient } from "../../../hooks/home/hero/useGetHeroBgWithGradient";
import SkeletonBig from "../../shared/Skeleton/SkeletonBig/SkeletonBig";
import SkeletonCustom from "../../shared/Skeleton/SkeletonCustom/SkeletonCustom";
import SkeletonHero from "../../shared/Skeleton/SkeletonHero/SkeletonHero";
import { useLanguage } from "../../../Context/LanguageProvider";
import Modal from "../../shared/Modal/Modal";
import WantToHelp from "../../shared/Modal/WantToHelp/WantToHelp";

const Hero = () => {
	const { currentLanguage } = useLanguage();
	const { heroContent, loading } = useGetHeroContent(currentLanguage);
	const { bgWithGradient, loadingPhoto } = useGetBgWithGradient();

	const [modal, setModal] = useState(true);

	return (
		<section className={style.container}>
			{loading && <SkeletonHero />}
			{!loadingPhoto && bgWithGradient && (
				<div
					className={style.containerImage}
					style={{
						background: `${bgWithGradient}`,
					}}>
					<div className={style.textWrapper}>
						{loading && (
							<>
								<SkeletonBig />
								<SkeletonBig />
							</>
						)}
						{!loading && heroContent && (
							<>
								<h1 className={style.titleTablet}>{heroContent.title}</h1>
								<p className={style.titleDescriptionTablet}>
									{heroContent.text}
								</p>
							</>
						)}
					</div>
					<div className={style.buttonContainerTablet}>
						{loading && (
							<>
								<SkeletonBig />
								<SkeletonBig />
							</>
						)}
						{!loading && heroContent && (
							<>
								<ButtonMain
									onClick={() => setModal(true)}
									color={"yellow"}>
									{heroContent.button1}
								</ButtonMain>
								<ButtonMain>{heroContent.button2}</ButtonMain>
							</>
						)}
					</div>
				</div>
			)}
			<div className={style.mobWrapper}>
				<Container>
					{loading && (
						<>
							<SkeletonCustom
								height='54px'
								mb='22px'
							/>
							<SkeletonCustom
								height='54px'
								mb='22px'
							/>
							<div className={style.buttonContainer}>
								<SkeletonCustom height='54px' />
								<SkeletonCustom height='54px' />
							</div>
						</>
					)}
					{!loading && heroContent && (
						<>
							<h1 className={style.titleSeparate}>{heroContent.title}</h1>
							<p className={style.titleDescription}>{heroContent.text}</p>
							<div className={style.buttonContainer}>
								<ButtonMain color={"yellow"}>{heroContent.button1}</ButtonMain>
								<ButtonMain>{heroContent.button2}</ButtonMain>
							</div>
						</>
					)}
				</Container>
			</div>
			<Modal
				visible={modal}
				setVisible={setModal}>
				<WantToHelp />
			</Modal>
		</section>
	);
};

export default Hero;
