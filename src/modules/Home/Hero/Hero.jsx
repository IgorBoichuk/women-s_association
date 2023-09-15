import React from "react";
import style from "./Hero.module.scss";
import { Container } from "../../shared/Container/Container";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";
import { useGetHeroContent } from "../../../hooks/home/hero/useGetHeroContent";
import { useLanguage } from "../../../Context/ContextProvider";
import { useGetBgWithGradient } from "../../../hooks/home/hero/useGetHeroBgWithGradient";


const Hero = () => {
	const { currentLanguage } = useLanguage();
	const { heroContent, loading } = useGetHeroContent(currentLanguage);
	const { bgWithGradient, loadingPhoto } = useGetBgWithGradient();
	
	return (
		<section className={style.container}>
			{!loading && heroContent && (
				<>
					{!loadingPhoto && (
						<div
							className={style.containerImage}
							style={{
								background: `${bgWithGradient}`,
							}}>
							<div className={style.textWrapper}>
								<h1 className={style.titleTablet}>{heroContent.title}</h1>
								<p className={style.titleDescriptionTablet}>
									{heroContent.text}
								</p>
							</div>
							<div className={style.buttonContainerTablet}>
								<ButtonMain color={"yellow"}>{heroContent.button1}</ButtonMain>
								<ButtonMain>{heroContent.button2}</ButtonMain>
							</div>
						</div>
					)}
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
