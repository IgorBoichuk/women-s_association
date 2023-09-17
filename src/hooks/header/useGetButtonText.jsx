import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { fireStore } from "../../firebase/firebase";
import { useLanguage } from "../../Context/LanguageProvider";

export const useGetButtonText = () => {
	const [button, setButton] = useState({});
	const [loadingButton, setLoadingButton] = useState(true);
const { currentLanguage } = useLanguage();
const key =
	currentLanguage === "uk"
		? "/header/header_uk/header_uk/button"
		: "/header/header_en/header_en/button";
	useEffect(() => {
		const getButtonFromDB = async () => {
			setLoadingButton(true);

			const docRef = doc(fireStore, key);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const allHeroContent = docSnap.data();
				setButton({ id: docSnap.id, ...allHeroContent });
			}
			setLoadingButton(false);
		};
		getButtonFromDB();
	}, [key]);

	return { button, loadingButton };
};
