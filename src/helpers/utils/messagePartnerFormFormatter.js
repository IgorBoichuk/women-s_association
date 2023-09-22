export const messagePartnerFormFormatter = (obj) => {
	const copyObj = { ...obj };

	const fullName = `ПІБ:  ${copyObj.fullName}`;
	const mobile = `Мобільний: ${copyObj.mobile}`;

	const helpOptions = [
		"юридична допомога",
		"соціально-реабілітаційна допомога",
		"гуманітарна допомога",
		"допомога у працевлаштуванні (відкритті власної справи)",
	];

	const approvedHelpOptions = obj.checkboxes.map((el, index) =>
		el ? helpOptions[index] : ""
	);

	const formattedHTML = `
    <p>${fullName}</p>
    <p>${mobile}</p>
    <p>В якому напрямку Вам була б цікава співпраця?: ${approvedHelpOptions
			.filter(Boolean)
			.join(", ")}</p>
   
  `;

	return formattedHTML;
};
