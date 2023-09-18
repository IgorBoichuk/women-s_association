import React, { useState } from "react";
import style from "./Logo.module.scss";
import sprite from "../../../assets/svg/sprite.svg";
import { useGetLogoText } from "../../../hooks/header/useGetLogoText";
import SkeletonCustom from "../Skeleton/SkeletonCustom/SkeletonCustom";

export const Logo = ({ footerLogo }) => {
	const [loading, setLoading] = useState(true);
	const { logo } = useGetLogoText(setLoading);
	const width = footerLogo ? "82px" : "42px";
	const height = footerLogo ? "82px" : "42px";
	const borderRadius = footerLogo ? "82px" : "42px";

	return (
		<div className={style.logoRapper}>
			{loading && (
				<SkeletonCustom
					width={width}
					height={height}
					br={borderRadius}
				/>
			)}
			{!loading && logo && (
				<svg className={footerLogo ? style.logoFooter : style.logo}>
					<use xlinkHref={`${sprite}#logo`}></use>
				</svg>
			)}
			{loading && (
				<div className={style.skeletonWrapper}>
					<SkeletonCustom
						width='220px'
						height='12px'
					/>
					<SkeletonCustom
						width='220px'
						height='12px'
					/>
					<SkeletonCustom
						width='220px'
						height='12px'
					/>
				</div>
			)}
			{!loading && logo && (
				<span className={footerLogo ? style.logoTextFooter : style.logoText}>
					{logo.text}
				</span>
			)}
		</div>
	);
};
