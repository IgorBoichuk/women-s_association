import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { fireStore } from "../../firebase/firebase";
import { useLanguage } from "../../Context/ContextProvider";

export const useGetLogoText = (setLoading) => {
	const [logo, setLogo] = useState({});

	const { currentLanguage } = useLanguage();
	const key =
		currentLanguage === "uk"
			? "/header/header_uk/header_uk/logo-text"
			: "/header/header_en/header_en/logo-text";
	
	useEffect(() => {
		const getLogoTextFromDB = async () => {
			setLoading(true);
			const docRef = doc(fireStore, key);
			try {
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					const logoObj = docSnap.data();
					setLogo({ id: docSnap.id, ...logoObj });
				}
			} catch (error) {
				console.error(error);
				setLoading(false);
			}
			setLoading(false);
		};
		getLogoTextFromDB();
	}, [key, setLoading]);

	return { logo };
};
