export const messageNeedHelpFormatter = (obj) => {
	const copyObj = { ...obj };

	const fullName = `ПІБ:  ${copyObj.fullName}`;
	const mobile = `Мобільний: ${copyObj.mobile}`;
	const region = `Область: ${obj.region ? obj.region.label : "немає"}`;

	const familyStautusOptions = [
		"родина діючого військового",
		"родина ветерана",
		"родина загиблого чи зниклого безвісті військового",
		"інше",
	];
	const helpStatusOptions = [
		"юридична допомога",
		"соціальна допомога",
		"гуманітарна допомога",
		"допомога у працевлаштуванні (відкритті власної справи)",
	];

	const approvedFamilyStatus = obj.checkboxes.map((el, index) =>
		el ? familyStautusOptions[index] : ""
	);

	const approovedHelpOptions = obj.checkboxes1.map((el, index) =>
		el ? helpStatusOptions[index] : ""
	);
	const formattedHTML = `
    <p>${fullName}</p>
    <p>${mobile}</p>
    <p>${region}</p>
    <p>Який статус має ваша родина?: ${approvedFamilyStatus
			.filter(Boolean)
			.join(", ")}</p>
    <p>В якому напрямку Вам потрібна допомога?: ${approovedHelpOptions
			.filter(Boolean)
			.join(", ")}</p>
  `;

	return formattedHTML;
};
