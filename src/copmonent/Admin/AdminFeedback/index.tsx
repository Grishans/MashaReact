import React from "react"
import { Select } from "antd"
import { IForm } from "../../../types"
import { formStores } from "../../../stores/formStores"
import { observer } from "mobx-react-lite"

const AdminFeedback: React.FC = observer(
	(): React.ReactElement => {
		const { Option } = Select

		const forms: IForm[] = formStores.items

		const adminFeedbackActiveRefLabel = React.useRef<HTMLLabelElement>(null)
		const adminFeedbackCompletedRefLabel = React.useRef<HTMLLabelElement>(null)

		const [active, setActive] = React.useState(true)
		const [completed, setCompleted] = React.useState(false)

		const [feedbackMake, setFeedbackMake] = React.useState(true)
		const [feedbackCourses, setFeedbackCourses] = React.useState(false)

		const checkFeedbackToogle = React.useCallback(() => {
			adminFeedbackActiveRefLabel.current!.style.color = "#197BBD"
			adminFeedbackActiveRefLabel.current!.style.borderColor = "#197BBD"

			adminFeedbackCompletedRefLabel.current!.style.color = "#AEAEAE"
			adminFeedbackCompletedRefLabel.current!.style.borderColor = "#AEAEAE"
			adminFeedbackActiveRefLabel.current!.addEventListener("click", () => {
				setActive(true)
				setCompleted(false)

				adminFeedbackActiveRefLabel.current!.style.color = "#197BBD"
				adminFeedbackActiveRefLabel.current!.style.borderColor = "#197BBD"

				adminFeedbackCompletedRefLabel.current!.style.color = "#AEAEAE"
				adminFeedbackCompletedRefLabel.current!.style.borderColor = "#AEAEAE"
			})

			adminFeedbackCompletedRefLabel.current!.addEventListener("click", () => {
				setActive(false)
				setCompleted(true)

				adminFeedbackActiveRefLabel.current!.style.color = "#AEAEAE"

				adminFeedbackActiveRefLabel.current!.style.borderColor = "#AEAEAE"

				adminFeedbackCompletedRefLabel.current!.style.color = "#AA4D54"

				adminFeedbackCompletedRefLabel.current!.style.borderColor = "#AA4D54"
			})
		}, [])

		React.useEffect(() => {
			checkFeedbackToogle()
		}, [checkFeedbackToogle])

		const MakeShow = React.useCallback(() => {
			setFeedbackMake(true)
			setFeedbackCourses(false)
		}, [])
		const CoursesShow = React.useCallback(() => {
			setFeedbackMake(false)
			setFeedbackCourses(true)
		}, [])

		function handleChange(value: any) {
			if (value === "Make") {
				MakeShow()
			} else if (value === "Courses") {
				CoursesShow()
			}
		}
		return (
			<>
				<div className='admin__sevices__wrap'>
					<div className='admin__feedBack__select'>
						<Select defaultValue='Запись на макияж' onChange={handleChange}>
							<Option id='labelMake' value='Make'>
								Запись на макияж
							</Option>
							<Option id='labelCourses' value='Courses'>
								Запись на курсы
							</Option>
						</Select>
					</div>
					<div className='admin__feedback__toogle'>
						<label
							ref={adminFeedbackActiveRefLabel}
							htmlFor='adminFeedbackActive'>
							Активные
						</label>
						<label
							ref={adminFeedbackCompletedRefLabel}
							htmlFor='adminFeedbackСompleted'>
							Завершенные
						</label>
					</div>
					<div className='admin__feedback__table'>
						<div className='aft__make'>
							{feedbackMake && (
								<div className='aftm__Wrap'>
									{active && (
										<table>
											<tr className='adminTableTitle'>
												<th></th>
												<th>Имя</th>
												<th>Номер</th>
												<th>Дата</th>
												<th>Тип макияжа</th>
												<th></th>
											</tr>
											{forms &&
												forms
													.filter(
														(fil) =>
															fil.type?.toLowerCase().includes("макияж") &&
															fil.completed === false,
													)
													.map((item, idx) => (
														<tr key={idx}>
															<td
																className='adminTDActive'
																onClick={() => {
																	if (window.confirm("Завершить?")) {
																		const obj: IForm = {
																			_id: item._id,
																			completed: !item.completed,
																		}
																		formStores.edit(obj)
																	}
																}}>
																<img src='/img/admin_check.svg' alt='' />
															</td>
															<td>{item.name}</td>
															<td>{item.phone}</td>
															<td>{item.data}</td>
															<td>{item.type}</td>
															<td
																className='adminTDCross'
																onClick={() => {
																	if (window.confirm("Удалить?")) {
																		formStores.delete(item._id!)
																	}
																}}>
																<img src='/img/admin_cross.svg' alt='' />
															</td>
														</tr>
													))}
										</table>
									)}
									{completed && (
										<table>
											<tr className='adminTableTitle'>
												<th></th>
												<th>Имя</th>
												<th>Номер</th>
												<th>Дата</th>
												<th>Тип макияжа</th>
												<th></th>
											</tr>
											{forms &&
												forms
													.filter(
														(fil) =>
															fil.type?.toLowerCase().includes("макияж") &&
															fil.completed === true,
													)
													.map((item, idx) => (
														<tr key={idx}>
															<td
																className='adminTDActive'
																onClick={() => {
																	if (window.confirm("Завершить?")) {
																		const obj: IForm = {
																			_id: item._id,
																			completed: !item.completed,
																		}
																		formStores.edit(obj)
																	}
																}}>
																<img src='/img/admin_check.svg' alt='' />
															</td>
															<td>{item.name}</td>
															<td>{item.phone}</td>
															<td>{item.data}</td>
															<td>{item.type}</td>
															<td
																className='adminTDCross'
																onClick={() => {
																	if (window.confirm("Удалить?")) {
																		formStores.delete(item._id!)
																	}
																}}>
																<img src='/img/admin_cross.svg' alt='' />
															</td>
														</tr>
													))}
										</table>
									)}
								</div>
							)}
						</div>

						{feedbackCourses && (
							<div className='atfm__courses'>
								{active && (
									<table>
										<tr className='adminTableTitle'>
											<th></th>
											<th>Имя</th>
											<th>Номер</th>
											<th>Дата</th>
											<th>Тип макияжа</th>
											<th></th>
										</tr>
										{forms &&
											forms
												.filter(
													(fil) =>
														!fil.type?.toLowerCase().includes("макияж") &&
														fil.completed === false,
												)
												.map((item, idx) => (
													<tr key={idx}>
														<td
															className='adminTDActive'
															onClick={() => {
																if (window.confirm("Завершить?")) {
																	const obj: IForm = {
																		_id: item._id,
																		completed: !item.completed,
																	}
																	formStores.edit(obj)
																}
															}}>
															<img src='/img/admin_check.svg' alt='' />
														</td>
														<td>{item.name}</td>
														<td>{item.phone}</td>
														<td>{item.data}</td>
														<td>{item.type}</td>
														<td
															className='adminTDCross'
															onClick={() => {
																if (window.confirm("Удалить?")) {
																	formStores.delete(item._id!)
																}
															}}>
															<img src='/img/admin_cross.svg' alt='' />
														</td>
													</tr>
												))}
									</table>
								)}
								{completed && (
									<table>
										<tr className='adminTableTitle'>
											<th></th>
											<th>Имя</th>
											<th>Номер</th>
											<th>Дата</th>
											<th>Тип макияжа</th>
											<th></th>
										</tr>
										{forms &&
											forms
												.filter(
													(fil) =>
														!fil.type?.toLowerCase().includes("макияж") &&
														fil.completed === true,
												)
												.map((item, idx) => (
													<tr key={idx}>
														<td
															className='adminTDActive'
															onClick={() => {
																if (window.confirm("Завершить?")) {
																	const obj: IForm = {
																		_id: item._id,
																		completed: !item.completed,
																	}
																	formStores.edit(obj)
																}
															}}>
															<img src='/img/admin_check.svg' alt='' />
														</td>
														<td>{item.name}</td>
														<td>{item.phone}</td>
														<td>{item.data}</td>
														<td>{item.type}</td>
														<td
															className='adminTDCross'
															onClick={() => {
																if (window.confirm("Удалить?")) {
																	formStores.delete(item._id!)
																}
															}}>
															<img src='/img/admin_cross.svg' alt='' />
														</td>
													</tr>
												))}
									</table>
								)}
							</div>
						)}
					</div>
				</div>
			</>
		)
	},
)

export default AdminFeedback
