import React, { useEffect } from "react";
import style from "./Modal.module.scss";
import sprite from "../../../assets/svg/sprite.svg";
const Modal = ({ children, visible, setVisible }) => {
	const overlayStyles = [style.overlay, visible ? style.active : ""];
	const modalContentStyles = [style.modalContent, visible ? style.active : ""];
	
	if (visible) {
		document.body.classList.add("modal-open");
	} else {
		document.body.classList.remove("modal-open");
	}

	useEffect(() => {
		const handleEscapeKey = (event) => {
			if (visible && event.key === "Escape") {
				setVisible(false);
			}
		};
		document.addEventListener("keydown", handleEscapeKey);
		return () => {
			document.removeEventListener("keydown", handleEscapeKey);
		};
	}, [visible, setVisible]);

	return (
		<div
			className={overlayStyles.join(" ")}
			onClick={() => setVisible(false)}>
			<div
				className={modalContentStyles.join(" ")}
				onClick={(event) => event.stopPropagation()}>
				{children}
				<button
					className={style.closeButton}
					onClick={() => setVisible(false)}>
					<svg className={style.closeIcon}>
						<use xlinkHref={`${sprite}#close`}></use>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Modal;
