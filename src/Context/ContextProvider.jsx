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

	const [currentLanguage, setCurrentLanguage] = useState("uk");

	const toggleLanguage = (language) => {
		setCurrentLanguage(language);
	};

	return (
		<LanguageContext.Provider
			value={{ languages, currentLanguage, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}
