import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCrYEMyfsHpXXTAhX83mbQ90sqsyJFSJG8",
	authDomain: "associationofwivesandmot-7c64d.firebaseapp.com",
	projectId: "associationofwivesandmot-7c64d",
	storageBucket: "associationofwivesandmot-7c64d.appspot.com",
	messagingSenderId: "340802427130",
	appId: "1:340802427130:web:8f1568aedf708b8087d143",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const fireStore = getFirestore(app);
export { fireStore, app };
