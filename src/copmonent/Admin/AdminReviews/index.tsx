import React from "react"
import { Select } from "antd"
import AdminBTN from "../AdminBTN"
import { IReviews } from "../../../types"
import { reviewsStores } from "../../../stores/reviewsStores"
import classNames from "classnames"
import { attach } from "../../../utils/attachFiles"
import { observer } from "mobx-react-lite"

const AdminReviews: React.FC = observer(
	(): React.ReactElement => {
		const { Option } = Select
		const reviews: IReviews[] = reviewsStores.items
		const [reviewsAdd, setReviewsAdd] = React.useState<boolean>(false)
		const [types, setTypes] = React.useState<number>(0)
		const [objects, setObjects] = React.useState<Blob>()
		const [reviesVideoShow, setReviewsVideoShow] = React.useState<boolean>(true)
		const [reviesTextShow, setReviewsTextShow] = React.useState<boolean>(false)
		const [current, setCurrent] = React.useState<IReviews | undefined>()

		const addObj = async (
			e: React.ChangeEvent<HTMLInputElement>,
		): Promise<void> => {
			try {
				const file = e.target.files
				setObjects(file![0])
			} catch (error) {
				console.error(`Ошибка добавления файла: ${error}`)
			}
		}

		const changeObj = async (
			e: React.ChangeEvent<HTMLInputElement>,
		): Promise<void> => {
			try {
				const file = e.target.files
				setObjects(file![0])
			} catch (error) {
				console.error(`Ошибка добавления файла: ${error}`)
			}
		}

		const currenter = (e: IReviews): void => {
			current === undefined && setCurrent(e)
		}

		const ReviewsAddShow = React.useCallback(() => {
			setReviewsAdd((prev) => !prev)
		}, [])

		const VideoShow = React.useCallback(() => {
			setReviewsVideoShow(true)
			setReviewsTextShow(false)
		}, [])
		const TextShow = React.useCallback(() => {
			setReviewsVideoShow(false)
			setReviewsTextShow(true)
		}, [])

		React.useEffect(() => {
			const addBTN = document.querySelector<HTMLButtonElement>("#adminADD")
			addBTN!.onclick = ReviewsAddShow
			setTypes(0)
		}, [ReviewsAddShow])

		const handleChange = (value: number): void => {
			setTypes(value)
			if (value === 0) {
				VideoShow()
			} else if (value === 1) {
				TextShow()
			}
		}
		const saveForm = async (): Promise<void> => {
			try {
				let pics: any
				objects !== undefined
					? (pics = await attach(objects))
					: current
					? (pics = current.file)
					: (pics = "")

				if (current !== undefined) {
					const obj: IReviews = {
						_id: current._id,
						file: pics,
						filetype: types === 1 ? "image" : "video",
						type: types,
					}
					reviewsStores.edit(obj)
					setObjects(undefined)
					setCurrent(undefined)
					alert("Изменения сохранены!")
					return
				}

				const obj: IReviews = {
					file: pics,
					filetype: types === 1 ? "image" : "video",
					type: types,
				}
				reviewsStores.create(obj)
				setReviewsAdd(false)
				setObjects(undefined)
				setCurrent(undefined)
			} catch (error) {
				console.error(`Ошибка сохранения Отзывы: ${error}`)
			}
		}
		return (
			<>
				<div className='admin__sevices__wrap'>
					<div className='admin__reviews__BTN'>
						<Select defaultValue={0} onChange={handleChange}>
							<Option id='labelVideo' value={0}>
								Видео отзывы
							</Option>
							<Option id='labelNight' value={1}>
								Текствые отзывы
							</Option>
						</Select>
						<AdminBTN Save onClick={saveForm} />
						<AdminBTN Add />
					</div>
					<div className='amdin__reviews__content__wrap'>
						{reviesVideoShow && (
							<div className='arcw__video__wrap'>
								{reviewsAdd && (
									<div className='arcw__box'>
										<div className='arcw__top'>
											<img src='img/admin_cross.svg' alt='' />
										</div>
										<div className='ascb__inputs__img'>
											<div
												className={classNames("ascb__inputs__addNew", {
													"ascb__inputs__addNew-prev": objects,
												})}>
												<input
													id='inpFile'
													type='file'
													onChange={addObj}
													accept='video/mp4'
												/>
												<label htmlFor='inpFile'>
													{objects ? (
														<video
															controls
															src={URL.createObjectURL(objects)}></video>
													) : (
														<img src='/img/admin_camera.png' alt='' />
													)}
												</label>
											</div>
										</div>
									</div>
								)}
								{reviews &&
									reviews
										.filter((filt) => filt.type === 0)
										.map((item, index) => (
											<div className='arcw__box' key={index}>
												<div className='arcw__top'>
													<img
														src='img/admin_cross.svg'
														alt=''
														onClick={() => {
															if (window.confirm("Хотите удалить отзыв?")) {
																reviewsStores.delete(item._id!)
															}
														}}
													/>
												</div>
												<div className='arcw__bottomImg'>
													<video
														controls
														src={
															objects && current && current._id === item._id
																? URL.createObjectURL(objects)
																: `${process.env.REACT_APP_LINK}${item.file}`
														}></video>
												</div>
												<div className='Admin__change'>
													<label
														htmlFor='personalPhoto'
														onClick={() => currenter(item)}>
														Изменить видео
													</label>
													<input
														id='personalPhoto'
														type='file'
														onChange={changeObj}
													/>
												</div>
											</div>
										))}
							</div>
						)}
						{reviesTextShow && (
							<div className='arcw__text__wrap'>
								{reviewsAdd && (
									<div className='arcw__box'>
										<div className='arcw__top'>
											<img src='img/admin_cross.svg' alt='' />
										</div>
										<div className='ascb__inputs__img'>
											<div
												className={classNames("ascb__inputs__addNew", {
													"ascb__inputs__addNew-prev": objects,
												})}>
												<input id='inpFile' type='file' onChange={addObj} />
												<label htmlFor='inpFile'>
													<img
														src={
															objects
																? URL.createObjectURL(objects)
																: "/img/admin_camera.png"
														}
														alt=''
													/>
												</label>
											</div>
										</div>
									</div>
								)}
								{reviews &&
									reviews
										.filter((filt) => filt.type === 1)
										.map((item, index) => (
											<div className='arcw__box' key={index}>
												<div className='arcw__top'>
													<img
														src='img/admin_cross.svg'
														alt=''
														onClick={() => {
															if (window.confirm("Хотите удалить отзыв?")) {
																reviewsStores.delete(item._id!)
															}
														}}
													/>
												</div>
												<div className='arcw__bottomImg'>
													<img
														src={
															objects && current && current._id === item._id
																? URL.createObjectURL(objects)
																: `${process.env.REACT_APP_LINK}${item.file}`
														}
														alt=''
													/>
												</div>
												<div className='Admin__change'>
													<label
														htmlFor='personalPhoto'
														onClick={() => currenter(item)}>
														Изменить видео
													</label>
													<input
														id='personalPhoto'
														type='file'
														onChange={changeObj}
													/>
												</div>
											</div>
										))}
							</div>
						)}
					</div>
				</div>
			</>
		)
	},
)

export default AdminReviews
