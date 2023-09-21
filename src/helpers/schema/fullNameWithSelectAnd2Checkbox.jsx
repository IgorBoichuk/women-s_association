import * as yup from "yup";

const fullNameWithSelectAnd2Checkbox = yup.object().shape({
	fullName: yup
		.string()
		.required(
			"Рядок призвіще, ім'я та по-батькові є обов'язковим для заповнення"
		)
		.matches(
			/^[a-zA-Zа-яА-ЯёЁ\s'\d-]+$/,
			`Рядок призвіще, ім'я та по-батькові може містити лише літери, цифри, пробіли, 
    апостроф або дефіз`
		)
		.min(2, "Мінімальна довжина рядка – 2 символа")
		.max(255, "Максимальна довжина рядка - 255 символів"),
	mobile: yup
		.string()
		.required(`Рядок мобільний номер є обов'язковим для заповнення`)
		.matches(/^\+?[0-9]+$/, "Рядок може містити лише цифри та знак +")
		.min(10, "Мінімальна довжина номера – 10 цифр")
		.max(15, "Максимальна довжина номера – 15 цифр"),
	checkboxes: yup
		.array()
		.of(yup.boolean())
		.test("atLeastOneChecked", "Оберіть хочаб один варіант", (value) =>
			value.some((isChecked) => isChecked === true)
		),
	region: yup.object(),
	checkboxes1: yup
		.array()
		.of(yup.boolean())
		.test("atLeastOneChecked", "Оберіть хочаб один варіант", (value) =>
			value.some((isChecked) => isChecked === true)
		),
});

export default fullNameWithSelectAnd2Checkbox;
