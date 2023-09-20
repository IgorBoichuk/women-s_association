import React from "react";
import styles from "./SkeletonCustom.module.scss";

const SkeletonCustom = ({ width = "100%", height = "16px", mb, br, bg, mw}) => {
	const skeletonStyle = {
		width: width,
		height: height,
		marginBottom: mb,
		borderRadius: br,
		backgroundColor: bg,
		minWidth: mw,
	};

	return (
		<div
			className={styles.skeleton}
			style={skeletonStyle}></div>
	);
};

export default SkeletonCustom;
