import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { fireStore } from "../../../firebase/firebase";
import { useLanguage } from "../../../Context/LanguageProvider";

export const useGetInvitationContent = () => {
	const [invitation, setInvitation] = useState({});
	const [loadingInvitation, setLoadingInvitation] = useState(true);
	const { currentLanguage } = useLanguage();
	const key =
		currentLanguage === "uk"
			? "/home/invitation/invitation/invitation_uk"
			: "/home/invitation/invitation/invitation_en";
	useEffect(() => {
		const getInvitationFromDB = async () => {
			setLoadingInvitation(true);
			const docRef = doc(fireStore, key);
			try {
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					const invitationObj = docSnap.data();
					setInvitation({ id: docSnap.id, ...invitationObj });
				}
			} catch (error) {
				console.error("Ошибка при получении данных из Firestore:", error);
			}
			setLoadingInvitation(false);
		};
		getInvitationFromDB();
	}, [key]);

	return { invitation, loadingInvitation };
};
