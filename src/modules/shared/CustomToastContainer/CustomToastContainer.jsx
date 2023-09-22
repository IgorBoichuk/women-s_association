import style from "./CustomToastContainer.module.scss";
import sprite from "../../../assets/svg/sprite.svg";

export const CustomToastContainer = ({ success, error }) => {
	const backgroundColor = success ? '#00d408' : '#EA3800';
	return (
		<div className={style.contentWrapper}>
			<div
				className={style.iconWrapper}
				style={{ background: backgroundColor }}>
				{success && (
					<svg className={style.icon}>
						<use xlinkHref={`${sprite}#icon-checkIcon`}></use>
					</svg>
				)}
				{error && (
					<svg className={style.icon}>
						<use xlinkHref={`${sprite}#icon-error`}></use>
					</svg>
				)}
			</div>
			<div className={style.textWrapper}>
				{success && (
					<>
						<h4 className={style.title}>Ваш запит успішно надісланий</h4>
						<p className={style.text}>
							Після обробки вашої заявки наш менеджер зв’яжеться з вами
						</p>
					</>
				)}
				{error && (
					<>
						<h4 className={style.title}>Помилка надсилання запиту</h4>
						<p className={style.text}>
							Перевірте підключення до Інтернету та повторіть спробу
						</p>
					</>
				)}
			</div>
		</div>
	);
};
