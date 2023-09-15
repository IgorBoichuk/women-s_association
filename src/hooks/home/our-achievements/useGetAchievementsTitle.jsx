import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { fireStore } from "../../../firebase/firebase";
import { useLanguage } from "../../../Context/ContextProvider";

export const useGetAchievementsTitle = () => {
	const [title, setTitle] = useState({});
	const [loadingTitle, setLoadingTitle] = useState(true);
    const { currentLanguage } = useLanguage();
    const key =
			currentLanguage === "uk"
				? "/home/our-achievements/ our-achievements/achievements-title_uk"
				: "/home/our-achievements/ our-achievements/ achievements-title_en";
	useEffect(() => {
		const getTitleFromDB = async () => {
			setLoadingTitle(true);
			const docRef = doc(fireStore, key);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const titleObj = docSnap.data();
				setTitle({ id: docSnap.id, ...titleObj });
			}
			setLoadingTitle(false);
		};
		getTitleFromDB();
	}, [key]);

	return { title, loadingTitle };
};
