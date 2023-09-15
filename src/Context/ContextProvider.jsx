import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function useLanguage() {
	return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
	const languages = {
		uk: "UA",
		en: "EN",
	};

	const [currentLanguage, setCurrentLanguage] = useState(
		localStorage.getItem("currentLanguage") || "uk"
	);

	const toggleLanguage = (language) => {
		setCurrentLanguage(language);
		localStorage.setItem("currentLanguage", language);
	};

	return (
		<LanguageContext.Provider
			value={{ languages, currentLanguage, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}
