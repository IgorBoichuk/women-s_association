export const messageWantToHelpFormatter = (obj) => {
	const copyObj = { ...obj };

	const fullName = `ПІБ:  ${copyObj.fullName}`;
	const mobile = `Мобільний: ${copyObj.mobile}`;
	

	const helpOptions = [
		"адвокаційна підтримка",
		"допомога в реабілітаційному напрямку",
		"гуманітарна допомога",
		"допомога у працевлаштуванні (відкритті власної справи)",
		"інше",
	];

	const approvedHelpOptions = obj.checkboxes.map((el, index) =>
		el ? helpOptions[index] : ""
	);

	const formattedHTML = `
    <p>${fullName}</p>
    <p>${mobile}</p>
    <p>В якому напрямку Ви б хотіли допомогти?: ${approvedHelpOptions
			.filter(Boolean)
			.join(", ")}</p>
   
  `;

	return formattedHTML;
};
