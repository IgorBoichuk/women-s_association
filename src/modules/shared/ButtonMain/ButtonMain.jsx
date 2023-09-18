import React from "react";
import style from "./ButtonMain.module.scss";

const ButtonMain = ({ children, color, maxW, onClick }) => {
	const maxWidthStyle = {
		maxWidth: maxW,
	};

	const buttonClassName =
		color === "yellow" ? style.buttonYellow : style.buttonTransparent;

	return (
		<button
			onClick={onClick}
			className={`${buttonClassName} ${style.customButton}`}
			style={maxWidthStyle}>
			{children}
		</button>
	);
};

export default ButtonMain;
