import React from "react";
import classes from "./Hero.module.scss";
const Hero = () => {
	return (
		<div className={classes.container}>
			<div className={classes.containerImage}>
				<h3 className={classes.title}>
					Об’єднання дружин і матерів Захисників України
				</h3>
			</div>
		</div>
	);
};

export default Hero;
