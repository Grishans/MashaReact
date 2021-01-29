/* eslint-disable @typescript-eslint/no-unused-expressions */
import classNames from "classnames"
import React from "react"
import AdminAbout from "../copmonent/Admin/AdminAbout"
import AdminCourses from "../copmonent/Admin/AdminCourses"
import AdminFeedback from "../copmonent/Admin/AdminFeedback"
import AdminInst from "../copmonent/Admin/AdminInsta"
import AdminPortfolio from "../copmonent/Admin/AdminPortfolio"
import AdminReviews from "../copmonent/Admin/AdminReviews"
import AdminServices from "../copmonent/Admin/AdminSerices/indes"
import AdminToogle from "../copmonent/Admin/AdminToogle"
import SocNet from "../copmonent/Admin/SocNet"

const Admin: React.FC = (): React.ReactElement => {
	const [menu, setMenu] = React.useState<string>("home")
	const [admToogle, setAdmToogle] = React.useState<string>("Главная")

	const customSliderSlide = React.useCallback((): void => {
		document.querySelector("#adminPortf")?.addEventListener("click", () => {
			setTimeout(function () {
				document.getElementById("labelWeeding")?.click()
				console.log(document.getElementById("labelWeeding"))
			}, 2000)
		})
	}, [])
	React.useEffect((): void => {
		customSliderSlide()
	}, [customSliderSlide])
	return (
		<>
			<div className='admin__wrap'>
				<div className='adminHeader'>
					<div className='ah__logo'>
						<img src='/img/logo_white.svg' alt='' />
					</div>
				</div>

				<div className='adminLeftNav'>
					<ul>
						<li>
							<p
								onClick={(): void => {
									setMenu("home")
									setAdmToogle("Главная")
								}}
								className={classNames({ active: menu === "home" })}>
								Главная
							</p>
						</li>
						<li>
							<p
								onClick={(): void => {
									setMenu("serices")
									setAdmToogle("Услуги")
								}}
								className={classNames({ active: menu === "serices" })}>
								Услуги
							</p>
						</li>
						<li>
							<p
								onClick={(): void => {
									setMenu("portfolio")
									setAdmToogle("Портфолио")
								}}
								id='adminPortf'
								className={classNames({ active: menu === "portfolio" })}>
								Портфолио
							</p>
						</li>
						<li>
							<p
								onClick={(): void => {
									setMenu("courses")
									setAdmToogle("Курсы")
								}}
								className={classNames({ active: menu === "courses" })}>
								Курсы
							</p>
						</li>
						<li>
							<p
								onClick={(): void => {
									setMenu("about")
									setAdmToogle("О себе")
								}}
								className={classNames({ active: menu === "about" })}>
								О Себе
							</p>
						</li>
						<li>
							<p
								onClick={(): void => {
									setMenu("reviews")
									setAdmToogle("Отзывы")
								}}
								className={classNames({ active: menu === "reviews" })}>
								Отзывы
							</p>
						</li>
						<li>
							<p
								onClick={(): void => {
									setMenu("inst")
									setAdmToogle("Instagram")
								}}
								className={classNames({ active: menu === "inst" })}>
								Instagram
							</p>
						</li>
						<li>
							<p
								onClick={(): void => {
									setMenu("feedback")
									setAdmToogle("Обратная связь")
								}}
								className={classNames({ active: menu === "feedback" })}>
								Обратная связь
							</p>
						</li>
					</ul>
				</div>

				<div className='adminWrap'>
					<AdminToogle>{admToogle}</AdminToogle>
					{menu === "home" && <SocNet />}
					{menu === "serices" && <AdminServices />}
					{menu === "portfolio" && <AdminPortfolio />}
					{menu === "courses" && <AdminCourses />}
					{menu === "about" && <AdminAbout />}
					{menu === "reviews" && <AdminReviews />}
					{menu === "inst" && <AdminInst />}
					{menu === "feedback" && <AdminFeedback />}
				</div>
			</div>
		</>
	)
}

export default Admin
