import React from "react";
import style from "./ButtonMain.module.scss";

const ButtonMain = ({ children, color }) => {
	const buttonStyle =
		color === "yellow" ? style.buttonYellow : style.buttonTransparent;

	return <button className={buttonStyle}>{children}</button>;
};

export default ButtonMain;
