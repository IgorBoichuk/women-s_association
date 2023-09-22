import React from "react";
import Select from "react-select";

const customStyles = {
	control: (provided, state) => ({
		...provided,
		border: state.isFocused ? "2px solid #014AB9" : "1px solid #1F1F1F",
		borderRadius: "8px",
		boxShadow: "none",
	}),

	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? "#9D9D9D" : "white",
		color: state.isSelected ? "white" : "black",
		cursor: "pointer",
	}),

	dropdownIndicator: (provided) => ({
		...provided,
		color: "#1F1F1F", // Скрыть палку перед стрелкой вниз
	}),
	clearIndicator: (provided) => ({
		...provided,
		display: "none", // Скрыть кнопку "Очистить" (крестик)
	}),
	indicatorSeparator: (provided) => ({
		...provided,
		width: "none", // Скрыть палку перед стрелкой вниз
	}),
};

const SelectRegion = ({ value, onChange }) => {
	const regionOptions = [
		{ value: "Autonomous Republic of Crimea", label: "АР Крим" },
		{ value: "Vinnytska", label: "Вінницька" },
		{ value: "Volynska", label: "Волинська" },
		{ value: "Dnipropetrovska", label: "Дніпропетровська" },
		{ value: "Donetska", label: "Донецька" },
		{ value: "Zhytomyrska", label: "Житомирська" },
		{ value: "Zakarpatska", label: "Закарпатська" },
		{ value: "Zaporizka", label: "Запорізька" },
		{ value: "Ivano-Frankivska", label: "Івано-Франківська" },
		{ value: "Kyivska", label: "Київська" },
		{ value: "Kirovohradska", label: "Кіровоградська" },
		{ value: "Luhanska", label: "Луганська" },
		{ value: "Lvivska", label: "Львівська" },
		{ value: "Mykolaivska", label: "Миколаївська" },
		{ value: "Odeska", label: "Одеська" },
		{ value: "Poltavska", label: "Полтавська" },
		{ value: "Rivnenska", label: "Рівненська" },
		{ value: "Sumska", label: "Сумська" },
		{ value: "Ternopilska", label: "Тернопільська" },
		{ value: "Kharkivska", label: "Харківська" },
		{ value: "Khersonska", label: "Херсонська" },
		{ value: "Khmelnytska", label: "Хмельницька" },
		{ value: "Cherkaska", label: "Черкаська" },
		{ value: "Chernivetska", label: "Чернівецька" },
		{ value: "Chernihivska", label: "Чернігівська" },
	];
	return (
		<Select
			value={value}
			onChange={onChange}
			options={regionOptions}
			styles={customStyles}
			placeholder='Вкажіть область проживання'
		/>
	);
};

export default SelectRegion;
