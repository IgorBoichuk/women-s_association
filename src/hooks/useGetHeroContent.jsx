import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { fireStore } from "../firebase/firebase";

export const useGetHeroContent = (lang) => {
	const [heroContent, setHeroContent] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getHeroContentFromDB = async () => {
			setLoading(true);
			const langSuffix = lang === "en" ? "hero_en" : "hero_uk";
			const docRef = doc(fireStore, "home/hero/hero", langSuffix);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const allHeroContent = docSnap.data();
				setHeroContent({ id: docSnap.id, ...allHeroContent });
			}
			setLoading(false);
		};
		getHeroContentFromDB();
	}, [lang]);

	return { heroContent, loading };
};
