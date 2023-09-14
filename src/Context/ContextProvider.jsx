import React, { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
	const [isEnglish, setIsEnglish] = useState(false);
	const toggleButtonFunc = () => {
		setIsEnglish((prevState) => !prevState);
	};
	return (
		<MyContext.Provider value={{ isEnglish, toggleButtonFunc }}>
			{children}
		</MyContext.Provider>
	);
};
export function useTranslate() {
	return useContext(MyContext);
}
