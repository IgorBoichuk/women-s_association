import { useEffect, useState } from "react";
import { orderBy, query, collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../firebase/firebase";
import { useLanguage } from "../../Context/LanguageProvider";

export const useGetNavList = () => {
	const { currentLanguage } = useLanguage();
	const key =
		currentLanguage === "uk"
			? "/header/header_uk/header_uk/navigation/navigation"
			: "/header/header_en/header_en/navigation/navigation";

	const [navList, setNavList] = useState([]);
	const [loadingNavList, setLoadingNavList] = useState(true);

	useEffect(() => {
		const getNavListFromDB = async () => {
			const q = query(collection(fireStore, key), orderBy("order", "asc"));
			const queRySnapshot = await getDocs(q);
			const temp = [];
			queRySnapshot.forEach((doc) => {
				temp.push({ id: doc.id, ...doc.data() });
			});
			setNavList(temp);
			setLoadingNavList(false);
		};

		getNavListFromDB();
	}, [setLoadingNavList, key]);

	return { navList, loadingNavList };
};
