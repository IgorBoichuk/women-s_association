import React from "react";
import style from "./Statistics.module.scss";
import { Container } from "../../shared/Container/Container";
import sprite from "../../../assets/svg/sprite.svg";
import { useGetStatisticContent } from "../../../hooks/home/statistic/useGetStatisticContent";
import SkeletonCustom from "../../shared/Skeleton/SkeletonCustom/SkeletonCustom";

export const Statistics = () => {
	const { statistic, loadingStatistic } = useGetStatisticContent();

	return (
		<section className={style.section}>
			<Container>
				{loadingStatistic && (
					<SkeletonCustom
						height='50px'
						mb='40px'
						bg='#FFED00'
					/>
				)}
				{!loadingStatistic && statistic && (
					<h3 className={style.sectionTitle}>{statistic.sectionTiTle}</h3>
				)}

				<div className={style.list}>
					<div className={style.itemWrapper}>
						<div className={style.iconWrapper}>
							{loadingStatistic && (
								<>
									  <div className={style.flexContainer}>
  										<SkeletonCustom
  											mw='46px'
  											width='46px'
  											height='46px'
  											br='46px'
  											bg='#FFED00'
  										/>
  										<div className={style.columnFlex}>
  											<SkeletonCustom
  												width='90%'
  												bg='#FFED00'
  											/>
  											<SkeletonCustom
  												width='90%'
  												bg='#FFED00'
  											/>
  										</div>
  										<SkeletonCustom
  											width='46px'
  											mw='46px'
  											height='46px'
  											br='46px'
  											bg='#FFED00'
  										/>
  									
  									
									</div>
								</>
							 )} 
							{!loadingStatistic && statistic && (
								<>
									<svg
										width='46'
										height='46'
										className={style.vector}>
										<use xlinkHref={`${sprite}#vector`}></use>
									</svg>
									<svg
										width='30'
										height='30'
										className={style.vectorIcon}>
										<use xlinkHref={`${sprite}#group`}></use>
									</svg>
								</>
							)}
						</div>
						{!loadingStatistic && statistic && (
							<>
								<p className={style.itemTitle}>{statistic.stat1Title}</p>
								<span className={style.itemDescription}>{statistic.stat1}</span>
							</>
						)}
					</div>
					<div className={style.itemWrapper}>
						<div className={style.iconWrapper}>
							{loadingStatistic && (
								<div className={style.flexContainer}>
									<SkeletonCustom
										mw='46px'
										width='46px'
										height='46px'
										br='46px'
										bg='#FFED00'
									/>
									<div className={style.columnFlex}>
										<SkeletonCustom
											width='90%'
											bg='#FFED00'
										/>
										<SkeletonCustom
											width='90%'
											bg='#FFED00'
										/>
									</div>
									<SkeletonCustom
										width='46px'
										mw='46px'
										height='46px'
										br='46px'
										bg='#FFED00'
									/>
								</div>
							 )} 
							{!loadingStatistic && statistic && (
								<>
									<svg
										width='46'
										height='46'
										className={style.vector}>
										<use xlinkHref={`${sprite}#vector`}></use>
									</svg>
									<svg
										width='30'
										height='30'
										className={style.vectorIcon}>
										<use xlinkHref={`${sprite}#ukraine`}></use>
									</svg>
								</>
							)}
						</div>
						{!loadingStatistic && statistic && (
							<>
								{" "}
								<p className={style.itemTitle}>{statistic.stat2Title}</p>
								<span className={style.itemDescription}>
									{statistic.stat2}
								</span>{" "}
							</>
						)}
					</div>
					<div className={style.itemWrapper}>
						<div className={style.iconWrapper}>
							{loadingStatistic && (
								<div className={style.flexContainer}>
									<SkeletonCustom
										mw='46px'
										width='46px'
										height='46px'
										br='46px'
										bg='#FFED00'
									/>
									<div className={style.columnFlex}>
										<SkeletonCustom
											width='90%'
											bg='#FFED00'
										/>
										<SkeletonCustom
											width='90%'
											bg='#FFED00'
										/>
									</div>
									<SkeletonCustom
										width='46px'
										mw='46px'
										height='46px'
										br='46px'
										bg='#FFED00'
									/>
								</div>
							 )} 
							{!loadingStatistic && statistic && (
								<>
									<svg
										width='46'
										height='46'
										className={style.vector}>
										<use xlinkHref={`${sprite}#vector`}></use>
									</svg>
									<svg
										width='30'
										height='30'
										className={style.vectorIcon}>
										<use xlinkHref={`${sprite}#prijects`}></use>
									</svg>
								</>
							)}
						</div>
						{!loadingStatistic && statistic && (
							<>
								<p className={style.itemTitle}>{statistic.stat3Title}</p>
								<span className={style.itemDescription}>{statistic.stat3}</span>
							</>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};
