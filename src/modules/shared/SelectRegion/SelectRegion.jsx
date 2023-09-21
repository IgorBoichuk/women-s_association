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



const SelectRegion = ({ value, onChange, options }) => {
	return (
		
			<Select
				value={value}
				onChange={onChange}
				options={options}
				styles={customStyles}
				placeholder='Вкажіть область проживання'
			/>
	
	);
};

export default SelectRegion;
