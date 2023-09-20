import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { fireStore } from "../../../firebase/firebase";
import { useLanguage } from "../../../Context/LanguageProvider";

export const useGetStatisticContent = () => {
	const [statistic, setStatistic] = useState({});
	const [loadingStatistic, setLoadingStatistic] = useState(true);
	const { currentLanguage } = useLanguage();
	const key =
		currentLanguage === "uk"
			? "/home/statistic/statistic/statistic_uk"
			: "/home/statistic/statistic/statistic_en";
	useEffect(() => {
		const getStatisticFromDB = async () => {
			setLoadingStatistic(true);
			const docRef = doc(fireStore, key);
			try {
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					const statisticObj = docSnap.data();
					setStatistic({ id: docSnap.id, ...statisticObj });
				}
			} catch (error) {
				console.error("Ошибка при получении данных из Firestore:", error);
			}
			setLoadingStatistic(false);
		};
		getStatisticFromDB();
	}, [key]);

	return { statistic, loadingStatistic };
};


