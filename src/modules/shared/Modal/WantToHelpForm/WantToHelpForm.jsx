import React from "react";
import classnames from "classnames";
import style from "./WantToHelpForm.module.scss";
import { Formik, Form, Field } from "formik";
const WantToHelpForm = () => {
	function validationEmail(value) {
		const emailRegex = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/";

		if (!value) {
			return "Required";
		} else if (!emailRegex.test(value)) {
			return "Invalid email address ";
		}
	}
	return (
		<div className={style.container}>
			<h3 className={style.title}>Я хочу допомогти</h3>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				onSubmit={(values) => {
					console.log("submit", values);
				}}></Formik>
		</div>
	);
};

export default WantToHelpForm;

{
	/* <form onSubmit={formik.handleSubmit}>
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
			</form> */
}
