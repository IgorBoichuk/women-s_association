import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/firebase";

export const useGetBgWithGradient = () => {
	const [bgWithGradient, setBgWithGradient] = useState("");
	const [heroBgURL, setHeroBgURL] = useState("");

	const isSmallScreen = useMediaQuery({ maxWidth: 467 });
	const isMediumScreen = useMediaQuery({ minWidth: 467, maxWidth: 768 });
	const isLargeScreen = useMediaQuery({ minWidth: 768 });

	const [loading, setLoading] = useState(true);

	const getPhotoURL = async (fileRef) => {
		try {
			const downloadURL = await getDownloadURL(fileRef);
			setHeroBgURL(downloadURL);
			setLoading(false);
		} catch (error) {
			console.error("Error getting photo URL:", error);
			setLoading(false);
		}
	};

	useEffect(() => {
		let heroBgRef;

		if (isSmallScreen) {
			heroBgRef = ref(storage, "home/hero/heroBgMob.png");
		} else if (isMediumScreen) {
			heroBgRef = ref(storage, "home/hero/heroBg.png");
		} else if (isLargeScreen) {
			heroBgRef = ref(storage, "home/hero/heroBg.png");
		}

		if (heroBgRef) {
			getPhotoURL(heroBgRef);
		}
	}, [isSmallScreen, isMediumScreen, isLargeScreen]);

	useEffect(() => {
		if (isSmallScreen) {
			setBgWithGradient(`center center / cover no-repeat url(${heroBgURL})`);
		} else if (isMediumScreen) {
			setBgWithGradient(`linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.45) 0%,
        rgba(0, 0, 0, 0.45) 100%
      ),
      center center / cover no-repeat url(${heroBgURL}),
      lightgray -393.124px -1px / 303.297% 114.486% no-repeat`);
		} else if (isLargeScreen) {
			setBgWithGradient(`linear-gradient(
        90deg,
        rgba(31, 31, 31, 0.85) 38.67%,
        rgba(31, 31, 31, 0) 100%
      ),
      center center / cover no-repeat url(${heroBgURL}), lightgray 50%`);
		}
	}, [isSmallScreen, isMediumScreen, isLargeScreen, heroBgURL]);

	return { bgWithGradient, loading };
};
