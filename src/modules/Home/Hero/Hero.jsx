import React from "react";
import style from "./Hero.module.scss";
import { Container } from "../../shared/Container/Container";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";
import { useGetHeroContent } from "../../../hooks/useGetHeroContent";
import { useLanguage } from "../../../Context/ContextProvider";

const Hero = () => {
	const { currentLanguage } = useLanguage();
	const { heroContent, loading } = useGetHeroContent(currentLanguage);

	
	return (
		<section className={style.container}>
			{!loading && heroContent && (
				<>
					<div className={style.containerImage}>
						<div className={style.textWrapper}>
							<h1 className={style.titleTablet}>{heroContent.title}</h1>
							<p className={style.titleDescriptionTablet}>{heroContent.text}</p>
						</div>
						<div className={style.buttonContainerTablet}>
							<ButtonMain color={"yellow"}>{heroContent.button1}</ButtonMain>
							<ButtonMain>{heroContent.button2}</ButtonMain>
						</div>
					</div>
					<div className={style.mobWrapper}>
						<Container>
							<h1 className={style.titleSeparate}>{heroContent.title}</h1>
							<p className={style.titleDescription}>{heroContent.text}</p>
							<div className={style.buttonContainer}>
								<ButtonMain color={"yellow"}>{heroContent.button1}</ButtonMain>
								<ButtonMain>{heroContent.button2}</ButtonMain>
							</div>
						</Container>
					</div>
				</>
			)}
		</section>
	);
};

export default Hero;
