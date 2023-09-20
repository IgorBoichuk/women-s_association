import React from 'react'
import style from './ButtonContactUs.module.scss'
import sprite from '../../assets/svg/sprite.svg'
const ButtonContactUs = () => {
  return (
		<button className={style.buttonContactUs}>
			<svg
				width='40px'
				height='40px'
				className=''>
				<use xlinkHref={`${sprite}#icon-mdi_email-edit-outline`}></use>
			</svg>
		</button>
	);
}

export default ButtonContactUs
