import { useEffect, useState } from "react";
import { orderBy, query, collection, getDocs } from "firebase/firestore";
import { fireStore } from "../firebase/firebase";

export const useGetOurAchievements = (setLoadingAchievements, shouldAddSuffix) => {
	const [achievements, setAchievements] = useState([]);

	useEffect(() => {
		const getAchievements = async () => {
			const collectionName = shouldAddSuffix
				? "achievements_en"
				: "achievements";
			setLoadingAchievements(true);
			const q = query(
				collection(fireStore, collectionName),
				orderBy("order", "asc")
			);

			const querySnapshot = await getDocs(q);
			const temp = [];
			querySnapshot.forEach((doc) => {
				temp.push({ id: doc.id, ...doc.data() });
			});
			console.log(temp);

			setAchievements(temp);

			setLoadingAchievements(false);
		};

		getAchievements();
	}, [setLoadingAchievements, shouldAddSuffix]);

	return achievements;
};
