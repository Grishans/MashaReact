import React from "react"
import userStores from "../../../stores/userStores"
import { generateMD5 } from "../../../utils/generateMD5"
type TVal = {
	login?: string
	password?: string
}
const AdmiAuthorization: React.FC = (): React.ReactElement => {
	const [val, setVal] = React.useState<TVal>({})
	const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }))
	}
	const signIn = (): void => {
		userStores.signIn({
			username: val.login,
			password: generateMD5(val.password + "RGYKcVeU2vpj4nv2"),
		})
	}
	return (
		<>
			<div className='header__wrap admin__aut__wrap'>
				<div className='header__main'>
					<div className='header__main__text'>
						<img src='/img/logo_white.svg' alt='' />
						<div className='admin__header__input'>
							<label htmlFor='adminLogin'>Логин</label>
							<input
								id='adminLogin'
								type='text'
								name='login'
								value={val.login}
								onChange={changeInput}
							/>
							<label htmlFor='adminPassword'>Пароль</label>
							<input
								id='adminPassword'
								type='password'
								name='password'
								value={val.password}
								onChange={changeInput}
							/>
							<button className='adminAutBtn' onClick={signIn}>
								Войти
							</button>
						</div>
					</div>
					<img src='/img/main-girl.png' alt='' className='girl' />
				</div>
				<div className='header__bg'></div>
				<img className='header__bg__left_top' src='img/leftUp.png' alt='' />
				<img
					className='header__bg__left_bottom'
					src='img/leftDown.png'
					alt=''
				/>
				<img className='header__bg__right_top' src='img/rightUp.png' alt='' />
			</div>
		</>
	)
}

export default AdmiAuthorization
