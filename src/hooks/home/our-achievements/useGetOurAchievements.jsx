import { useEffect, useState } from "react";
import { orderBy, query, collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../../firebase/firebase";
import { useLanguage } from "../../../Context/LanguageProvider";

export const useGetOurAchievements = () => {
	const { currentLanguage } = useLanguage();
	const key =
		currentLanguage === "uk"
			? "/home/our-achievements/ our-achievements/our-achievements_uk/our-achievements_uk"
			: "/home/our-achievements/ our-achievements/ our-achievements_en/ our-achievements_en";

	const [achievements, setAchievements] = useState([]);
	const [loadingAchievements, setLoadingAchievements] = useState(true);

	useEffect(() => {
		const getAchievements = async () => {
			const q = query(collection(fireStore, key), orderBy("order", "asc"));
			const queRySnapshot = await getDocs(q);
			const temp = [];
			queRySnapshot.forEach((doc) => {
				temp.push({ id: doc.id, ...doc.data() });
			});
			setAchievements(temp);
			setLoadingAchievements(false);
		};

		getAchievements();
	}, [setLoadingAchievements, key]);

	return { achievements, loadingAchievements };
};
