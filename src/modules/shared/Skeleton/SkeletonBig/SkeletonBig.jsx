import React from "react";
import styles from "./SkeletonBig.module.scss";

const SkeletonBig = ({ width="100%", height}) => {
	const skeletonStyle = {
		width: width,
		height: height,
	};

	return (
		<div
			className={styles.skeleton}
			style={skeletonStyle}></div>
	);
};

export default SkeletonBig;
