import React from "react";
import styles from "./SkeletonCustom.module.scss";

const SkeletonCustom = ({ width = "100%", height, mb }) => {
	const skeletonStyle = {
		width: width,
		height: height,
		marginBottom: mb,
	};

	return (
		<div
			className={styles.skeleton}
			style={skeletonStyle}></div>
	);
};

export default SkeletonCustom;
