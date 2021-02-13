import classNames from "classnames"
import { observer } from "mobx-react-lite"
import React from "react"
import { instaStores } from "../../../stores/instaStores"
import { IInst } from "../../../types"
import { attach } from "../../../utils/attachFiles"
import AdminBTN from "../AdminBTN"

const AdminInst: React.FC = observer(
	(): React.ReactElement => {
		const insta: IInst[] = instaStores.items
		const [instAdd, setInstAdd] = React.useState(false)
		const [photo, setPhoto] = React.useState<any>(null)
		const [current, setCurrent] = React.useState<IInst | undefined>()

		const instAddShow = React.useCallback(() => {
			setInstAdd((prev) => !prev)
		}, [])

		const addObj = async (
			e: React.ChangeEvent<HTMLInputElement>,
		): Promise<void> => {
			try {
				const file = e.target.files
				setPhoto(file![0])
			} catch (error) {
				console.error(`Ошибка добавления файла: ${error}`)
			}
		}
		const changeObj = async (
			item: any,
			e: React.ChangeEvent<HTMLInputElement>,
		): Promise<void> => {
			try {
				const file = e.target.files
				setPhoto(file![0])
				setCurrent(item)
			} catch (error) {
				console.error(`Ошибка добавления файла: ${error}`)
			}
		}

		const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
			setCurrent((pre) => ({ ...pre, [e.target.name]: e.target.value }))
		}

		const saveForm = async (): Promise<void> => {
			try {
				let pics: any
				photo !== undefined ? (pics = await attach(photo)) : (pics = "")
				if (current && current._id!.length > 0) {
					const obj: IInst = {
						_id: current && current._id,
						link: current && current.link,
						photo: pics,
					}
					instaStores.edit(obj)
					alert("Фотография изменена!")
					setInstAdd(false)
					setCurrent(undefined)
					setPhoto(null)
					return
				}
				const obj: IInst = {
					link: current && current.link,
					photo: pics,
				}
				instaStores.create(obj)
				setInstAdd(false)
				setCurrent(undefined)
				setPhoto(null)
				alert("Фотография добавленна!")
			} catch (error) {
				console.error(error)
			}
		}

		React.useEffect(() => {
			const addBTN = document.querySelector<HTMLButtonElement>("#adminADD")
			addBTN!.onclick = instAddShow
		})
		return (
			<>
				<div className='admin__sevices__wrap'>
					<div className='AdminInst__btn'>
						<AdminBTN Add />
						<AdminBTN Save onClick={saveForm} />
					</div>
					<div className='AdminInst__wrap'>
						{instAdd && (
							<div className='admin__content__box admin__inst__box'>
								<div className='aib__cross'>
									<img
										src='img/admin_cross.svg'
										alt=''
										onClick={() => setInstAdd(false)}
									/>
								</div>
								<hr />
								<div className='aib__input'>
									<label htmlFor='adminInst' className='adminLabel'>
										Ссылка на фото
									</label>
									<input
										type='text'
										id='adminInst'
										name='link'
										value={current && current!.link}
										onChange={changeInput}
										className='adminInput'
										placeholder='Введите ссылку'
									/>
								</div>
								<div
									className={classNames("ascb__inputs__addNew", {
										"ascb__inputs__addNew-prev": photo,
									})}>
									<input id='inpFile' type='file' onChange={addObj} />
									<label htmlFor='inpFile'>
										<img
											src={
												photo
													? URL.createObjectURL(photo)
													: "/img/admin_camera.png"
											}
											alt=''
										/>
									</label>
								</div>
								<div className='Admin__change'>
									<label htmlFor='decorationPhoto'>Изменить фотографию</label>
									<input id='decorationPhoto' type='file' onChange={addObj} />
								</div>
							</div>
						)}
						{insta &&
							insta.map((item, index) => (
								<div
									className='admin__content__box admin__inst__box'
									key={index}>
									<div className='aib__cross'>
										<img
											src='img/admin_cross.svg'
											alt=''
											onClick={() => {
												if (window.confirm("Хотите удалить фотографию?")) {
													instaStores.delete(item._id!)
												}
											}}
										/>
									</div>
									<hr />
									<div className='aib__input'>
										<label htmlFor='adminInst' className='adminLabel'>
											Ссылка на фото
										</label>
										<input
											type='text'
											id='adminInst'
											name='link'
											value={item.link}
											onChange={(e) => (item.link = e.target.value)}
											className='adminInput'
											placeholder='Введите ссылку'
										/>
									</div>
									<div className='aib__img'>
										<img
											src={`${process.env.REACT_APP_LINK}${item.photo}`}
											alt=''
										/>
									</div>
									<div className='Admin__change'>
										<label htmlFor='decorationPhoto'>Изменить фотографию</label>
										<input
											id='decorationPhoto'
											type='file'
											onChange={(e) => changeObj(item, e)}
										/>
									</div>
								</div>
							))}
					</div>
				</div>
			</>
		)
	},
)

export default AdminInst
