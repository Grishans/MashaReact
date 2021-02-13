import { observer } from "mobx-react-lite"
import React from "react"
import { aboutsStores } from "../../../stores/aboutsStores"
import { IAbout } from "../../../types"
import { attach } from "../../../utils/attachFiles"
import AdminBTN from "../AdminBTN"

const AdminAbout: React.FC = observer(
	(): React.ReactElement => {
		const about: IAbout = aboutsStores.items
		const [remainder, setReminder] = React.useState<number>(0)
		const [aboutCurr, setAboutCurr] = React.useState<IAbout>({})
		const [photo1, setPhoto1] = React.useState<any>(null)
		const [photo2, setPhoto2] = React.useState<any>(null)

		const rmeinderValue = () => {
			const Value =
				56 -
				(document.getElementById("adminAboutINP") as HTMLInputElement).value
					.length
			setReminder(Value)
		}

		const changeInput = (
			e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		): void => {
			setAboutCurr((pre) => ({ ...pre, [e.target.name]: e.target.value }))
		}

		const addImage1 = (e: React.ChangeEvent<HTMLInputElement>): void => {
			const file = e.target.files
			setPhoto1(file![0])
		}
		const addImage2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
			const file = e.target.files
			setPhoto2(file![0])
		}

		const saveForm = async (): Promise<void> => {
			try {
				let pic1, pic2
				photo1 ? (pic1 = await attach(photo1)) : (pic1 = aboutCurr.photo1)
				photo2 ? (pic2 = await attach(photo2)) : (pic2 = aboutCurr.photo2)
				const obj: IAbout = {
					_id: aboutCurr._id,
					quote: aboutCurr.quote,
					desc: aboutCurr.desc,
					photo1: pic1,
					photo2: pic2,
				}
				aboutsStores.edit(obj)
				alert("Изменения О Себе сохранены!")
				setPhoto1(null)
				setPhoto2(null)
				//setAboutCurr(undefined)
			} catch (error) {
				console.error(`Ошибка О Нас: ${error}`)
			}
		}

		React.useEffect(() => {
			rmeinderValue()
		}, [])
		React.useEffect(() => {
			about && setAboutCurr(about)
		}, [about])
		return (
			<>
				<div className='admin__sevices__wrap'>
					<AdminBTN
						Save
						onClick={saveForm}
						disabled={aboutCurr === undefined}
					/>
					<div className='admin__content__box admin__about__box'>
						<label className='adminLabel'>Биография</label>
						<hr />
						<label htmlFor='adminAboutINP' className='adminLabel'>
							Цитата
						</label>
						<p className='adminAbout__remainder'>
							Максимум 56 символов. <span>Символов осталось {remainder}</span>
						</p>
						<input
							type='text'
							className='adminInput'
							id='adminAboutINP'
							//defaultValue='Я считаю что каждая женщина прекрасна'
							name='quote'
							value={aboutCurr && aboutCurr.quote}
							onChange={changeInput}
							maxLength={56}
							minLength={0}
							onInput={rmeinderValue}
						/>

						<label htmlFor='adminAboutTA' className='adminLabel'>
							О себе
						</label>
						<textarea
							id='adminAboutTA'
							className='adminInput'
							name='desc'
							value={aboutCurr && aboutCurr.desc}
							onChange={changeInput}
							placeholder='Описание'></textarea>
					</div>

					<div className='admin__about__photo'>
						<div className='aap__box'>
							<label className='adminLabel'>Декоративное фото</label>
							<img
								src={
									photo1
										? URL.createObjectURL(photo1)
										: aboutCurr.photo1 && aboutCurr.photo1.length <= 0
										? "/img/about_paint.png"
										: `${process.env.REACT_APP_LINK}${aboutCurr.photo1}`
								}
								alt=''
							/>
							<div className='Admin__change'>
								<label htmlFor='decorationPhoto'>Изменить фотографию</label>
								<input id='decorationPhoto' type='file' onChange={addImage1} />
							</div>
						</div>
						<div className='aap__box'>
							<label className='adminLabel'>Декоративное фото</label>
							<img
								src={
									photo2
										? URL.createObjectURL(photo2)
										: aboutCurr.photo1 && aboutCurr.photo1.length <= 0
										? "/img/about_photo.png"
										: `${process.env.REACT_APP_LINK}${aboutCurr.photo2}`
								}
								alt=''
							/>
							<div className='Admin__change'>
								<label htmlFor='personalPhoto'>Изменить фотографию</label>
								<input id='personalPhoto' type='file' onChange={addImage2} />
							</div>
						</div>
					</div>
				</div>
			</>
		)
	},
)

export default AdminAbout
