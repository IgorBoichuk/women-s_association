import React from "react";
import style from "./NeedHelpForm.module.scss";
import { Formik, Form, Field } from "formik";
import validationFullNameAndPhoneNumber from "../../../../helpers/schema/validationFullNameAndPhoneNumber";
import sprite from "../../../../assets/svg/sprite.svg";
import ButtonMain from "../../ButtonMain/ButtonMain";

const NeedHelpForm = () => {
	const validationSchema = validationFullNameAndPhoneNumber;

	return (
		<div className={style.container}>
			<h3 className={style.title}>ЧУЧУКА</h3>
			<Formik
				validationSchema={validationSchema}
				initialValues={{
					fullName: "",
					mobile: "",
					checkboxes: [false, false, false, false, false],
				}}
				onSubmit={(values) => {
					console.log("submit", values);
				}}>
				{({ errors, touched, values, isValid, dirty }) => (
					<Form className={style.form}>
						<label>
							<Field
								className={`${style.field} ${
									errors.fullName && touched.fullName ? style.errorInput : ""
								}`}
								name='fullName'
								placeholder='ПІБ'
							/>
						</label>
						{errors.fullName && touched.fullName ? (
							<div
								className={style.error}
								style={{
									minHeight: "36px",
									maxHeight: "36px",
								}}>
								<span>{errors.fullName}</span>
							</div>
						) : (
							<>
								<div className={style.errorPlaceHolder}></div>
								<div className={style.errorPlaceHolder}></div>
							</>
						)}

						<label>
							<Field
								className={`${style.field} ${
									errors.fullName && touched.fullName ? style.errorInput : ""
								}`}
								name='mobile'
								placeholder='Ваш контактний номер'
							/>
						</label>
						{errors.mobile && touched.mobile ? (
							<div className={style.error}>
								<span>{errors.mobile}</span>
							</div>
						) : (
							<div className={style.errorPlaceHolder}></div>
						)}
						<h4 className={style.subTitle}>
							В якому напрямку Ви б хотіли допомогти?
						</h4>
						{errors.checkboxes && touched.checkboxes ? (
							<div className={style.error}>
								<span>{errors.checkboxes}</span>
							</div>
						) : (
							<div className={style.errorPlaceHolder}></div>
						)}
						<div className={style.checkboxGroup}>
							<label className={style.checkboxLabel}>
								<Field
									className={style.checkboxInput}
									type='checkbox'
									name='checkboxes[0]'
								/>{" "}
								{values.checkboxes[0] ? ( // Проверяем значение чекбокса
									<svg className={style.icon}>
										<use xlinkHref={`${sprite}#icon-checkbox-checked`}></use>
									</svg>
								) : (
									<div className={style.notChecked}></div>
								)}
								<span className={style.checkBoxDescription}>
									адвокаційна підтримка
								</span>
							</label>
							<label className={style.checkboxLabel}>
								<Field
									className={style.checkboxInput}
									type='checkbox'
									name='checkboxes[1]'
								/>{" "}
								{values.checkboxes[1] ? ( // Проверяем значение чекбокса
									<svg className={style.icon}>
										<use xlinkHref={`${sprite}#icon-checkbox-checked`}></use>
									</svg>
								) : (
									<div className={style.notChecked}></div>
								)}
								<span className={style.checkBoxDescription}>
									допомога в реабілітаційному напрямку
								</span>
							</label>
							<label className={style.checkboxLabel}>
								<Field
									className={style.checkboxInput}
									type='checkbox'
									name='checkboxes[2]'
								/>{" "}
								{values.checkboxes[2] ? (
									<svg className={style.icon}>
										<use xlinkHref={`${sprite}#icon-checkbox-checked`}></use>
									</svg>
								) : (
									<div className={style.notChecked}></div>
								)}
								<span className={style.checkBoxDescription}>
									гуманітарна допомога
								</span>
							</label>
							<label className={style.checkboxLabel}>
								<Field
									className={style.checkboxInput}
									type='checkbox'
									name='checkboxes[3]'
								/>{" "}
								{values.checkboxes[3] ? ( // Проверяем значение чекбокса
									<svg className={style.icon}>
										<use xlinkHref={`${sprite}#icon-checkbox-checked`}></use>
									</svg>
								) : (
									<div className={style.notChecked}></div>
								)}
								<span className={style.checkBoxDescription}>
									допомога з працевлаштуванням (власною справою)
								</span>
							</label>
							<label className={style.checkboxLabel}>
								<Field
									className={style.checkboxInput}
									type='checkbox'
									name='checkboxes[4]'
								/>{" "}
								{values.checkboxes[4] ? ( // Проверяем значение чекбокса
									<svg className={style.icon}>
										<use xlinkHref={`${sprite}#icon-checkbox-checked`}></use>
									</svg>
								) : (
									<div className={style.notChecked}></div>
								)}
								<span className={style.checkBoxDescription}>інше</span>
							</label>
						</div>
						{!dirty || !isValid ? (
							<button className={style.buttonDisabled}>Відправити</button>
						) : (
							<ButtonMain
								color='yellow'
								type='submit'>
								Відправити
							</ButtonMain>
						)}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default NeedHelpForm;
