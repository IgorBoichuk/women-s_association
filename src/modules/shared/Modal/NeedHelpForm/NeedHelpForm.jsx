import React from "react";
import style from "./NeedHelpForm.module.scss";
import { Formik, Form, Field } from "formik";
import sprite from "../../../../assets/svg/sprite.svg";
import ButtonMain from "../../ButtonMain/ButtonMain";
import SelectRegion from "../../SelectRegion/SelectRegion";
import fullNameWithSelectAnd2Checkbox from "../../../../helpers/schema/fullNameWithSelectAnd2Checkbox";

const NeedHelpForm = ({ modalClose }) => {
	const validationSchema = fullNameWithSelectAnd2Checkbox;
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
		<div className={style.container}>
			<h3 className={style.title}>Я потребую допомоги</h3>
			<Formik
				validationSchema={validationSchema}
				initialValues={{
					fullName: "",
					mobile: "",
					checkboxes: [false, false, false, false],
					region: null,
					checkboxes1: [false, false, false, false],
				}}
				onSubmit={(values, { resetForm }) => {
					const config = {
						// Username: "info.familyato@gmail.com",
						// Password: "B5C19DC83206FC363135826B4CA4F46C88A2",
						// Host: "smtp.elasticemail.com",
						// Port: 2525,

						SecurityToken: "a520f5f1-64f2-415b-8245-73515abd4572 ",
						To: "vazhachkimikocha@gmail.com",
						From: "info.familyato@gmail.com",
						Subject: "This is the subject",
						Body: `${values}`,
					};
					if (window.Email) {
						console.log(`window Email is present`);
						try {
							window.Email.send(config);
							alert(`Email sent successfully`);
						} catch (error) {
							console.log(error);
						}
					}
					console.log("form", values);
					resetForm();
					modalClose();



				}}
				validateOnChange={true}>
				{({ errors, touched, values, isValid, dirty, setFieldValue }) => (
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
									errors.mobile && touched.mobile ? style.errorInput : ""
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
						<h4 className={style.subTitle}>Який статус має ваша родина?</h4>
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
									родина діючого військового
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
									родина ветерана
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
									родина загиблого чи зниклого безвісті військового
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
								<span className={style.checkBoxDescription}>інше</span>
							</label>
						</div>

						<label className={style.selectLabel}>
							<SelectRegion
								value={values.region}
								onChange={(value) => setFieldValue("region", value)}
								options={regionOptions}
							/>
						</label>

						<h4 className={style.subTitle}>
							В якому напрямку Вам потрібна допомога?
						</h4>
						{errors.checkboxes1 && touched.checkboxes1 ? (
							<div className={style.error}>
								<span>{errors.checkboxes1}</span>
							</div>
						) : (
							<div className={style.errorPlaceHolder}></div>
						)}
						<div className={style.checkboxGroup}>
							<label className={style.checkboxLabel}>
								<Field
									className={style.checkboxInput}
									type='checkbox'
									name='checkboxes1[0]'
								/>{" "}
								{values.checkboxes1[0] ? (
									<svg className={style.icon}>
										<use xlinkHref={`${sprite}#icon-checkbox-checked`}></use>
									</svg>
								) : (
									<div className={style.notChecked}></div>
								)}
								<span className={style.checkBoxDescription}>
									юридична допомога
								</span>
							</label>
							<label className={style.checkboxLabel}>
								<Field
									className={style.checkboxInput}
									type='checkbox'
									name='checkboxes1[1]'
								/>{" "}
								{values.checkboxes1[1] ? (
									<svg className={style.icon}>
										<use xlinkHref={`${sprite}#icon-checkbox-checked`}></use>
									</svg>
								) : (
									<div className={style.notChecked}></div>
								)}
								<span className={style.checkBoxDescription}>
									соціально-реабілітаційниа допомога
								</span>
							</label>
							<label className={style.checkboxLabel}>
								<Field
									className={style.checkboxInput}
									type='checkbox'
									name='checkboxes1[2]'
								/>{" "}
								{values.checkboxes1[2] ? (
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
									name='checkboxes1[3]'
								/>{" "}
								{values.checkboxes1[3] ? (
									<svg className={style.icon}>
										<use xlinkHref={`${sprite}#icon-checkbox-checked`}></use>
									</svg>
								) : (
									<div className={style.notChecked}></div>
								)}
								<span className={style.checkBoxDescription}>
									допомога у працевлаштуванні (відкритті власної справи)
								</span>
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
