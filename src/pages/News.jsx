import React, { useState } from "react";
import { useGetOurAchievements } from "../hooks/home/our-achievements/useGetOurAchievements";
import { useTranslate } from "../Context/ContextProvider";


export const News = () => {
//   const [loadingAchievements, setLoadingAchievements] = useState(false);
//   const { isEnglish, toggleButtonFunc } = useTranslate();
//   const ourAchievements = useGetOurAchievements(
// 		setLoadingAchievements,
// 		isEnglish
// 	);
  return (
		<ul >
			{/* {ourAchievements.map((el) => ( */}
				<li
					// key={el.id}
					>
					<div >
						{/* !! MAX SYMBOLS 288 WITH BACKSPACES */}
				  <p >
					  {/* {el.text} */}
				  </p>
					</div>
				</li>
			{/* // ))} */}
		</ul>
	);
};
