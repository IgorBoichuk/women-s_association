import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./WantToHelpForm.module.scss";
const WantToHelpForm = () => {

	 const initialValues = {
			email: "",
			mobile: "",
			checkbox1: false,
			checkbox2: false,
			checkbox3: false,
			checkbox4: false,
			checkbox5: false,
			checkbox6: false,
		};

		const validationSchema = Yup.object().shape({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			mobile: Yup.string()
				.matches(/^\d{10}$/, "Mobile number must be 10 digits")
				.required("Mobile number is required"),
		});

		const onSubmit = (values) => {
			console.log("Form Data:", values);
		};

		const formik = useFormik({
			initialValues,
			validationSchema,
			onSubmit,
		});

		const getInputClassName = (fieldName) => {
			if (formik.touched[fieldName]) {
				if (formik.errors[fieldName]) {
					return "invalid-input";
				} else {
					return "valid-input";
				}
			}
			return "";
		};
  return (
		<div className={style.container}>
			<h3 className={style.title}>Я хочу допомогти</h3>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='text'
						id='email'
						name='email'
						className={`${style.input} ${getInputClassName("email")}`}
						value={formik.values.email}
						onChange={formik.handleChange}
					/>

					{formik.touched.email && formik.errors.email && (
						<div className={style.error}>{formik.errors.email}</div>
					)}
				</div>
				<div>
					<label htmlFor='mobile'>Mobile Number:</label>
					<input
						type='text'
						id='mobile'
						name='mobile'
						className={`${style.input} ${getInputClassName("mobile")}`}
						value={formik.values.mobile}
						onChange={formik.handleChange}
					/>
					{formik.touched.mobile && formik.errors.mobile && (
						<div className={style.error}>{formik.errors.mobile}</div>
					)}
				</div>
				<div>
					<label>Checkboxes:</label>
					{Array.from({ length: 6 }).map((_, index) => (
						<div key={index}>
							<label>
								<input
									type='checkbox'
									name={`checkbox${index + 1}`}
									checked={formik.values[`checkbox${index + 1}`]}
									onChange={formik.handleChange}
								/>
								Checkbox {index + 1}
							</label>
						</div>
					))}
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default WantToHelpForm
