// import { useEffect, useState } from "react";
// import { query, collection, getDocs } from "firebase/firestore";
// import { fireStore } from "../firebase/firebase";

// export const useGetOurAchievements = (
// 	// setLoadingAchievements
// 	// , shouldAddSuffix
// ) => {
// 	const [achievements, setAchievements] = useState([]);
// const [loadingAchievements, setLoadingAchievements] = useState(false);
// 	useEffect(() => {
// 		const getAchievements = async () => {
// 			// const collectionName = shouldAddSuffix
// 			// 	? "achievements_en"
// 			// 	: "achievements";
// 			setLoadingAchievements(true);
// 			const q = query(
// 				collection(fireStore, "home/hero/hero")
// 				// ,
// 				// orderBy("order", "asc")
// 			);

// 			const querySnapshot = await getDocs(q);
// 			console.log(querySnapshot);
// 			const temp = [];
// 			querySnapshot.forEach((doc) => {
// 				temp.push({ id: doc.id, ...doc.data() });
// 			});
			

// 			setAchievements(temp);

// 			setLoadingAchievements(false);
// 		};

// 		getAchievements();
// 	}, []);

// 	return achievements;
// };

import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { fireStore } from "../firebase/firebase";

export const useGetSingleProblem = (problemId) => {
	const [currentProblem, setCurrentProblem] = useState({})
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const getProblemFromDB = async () => {
			setLoading(true);
			const docRef = doc(fireStore, "home/hero/hero", problemId);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const problem = docSnap.data();
				setCurrentProblem({ id: docSnap.id, ...problem } );
				
			}
			setLoading(false);
		};
		getProblemFromDB();
	}, [problemId]);

	return { currentProblem, loading,  setCurrentProblem };
};
