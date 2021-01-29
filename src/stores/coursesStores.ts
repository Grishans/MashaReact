import { action, makeObservable, observable } from "mobx"
import { ICourse } from "../types"

class CoursecStores {
	items: ICourse[] = [
		{
			_id: String(Date.now()),
			title: "Первая услуга",
			desc: "Описание первой услуги",
		},
		{
			_id: String(Date.now()),
			title: "Вторая услуга",
			desc: "Описание второй услуги",
		},
	]

	constructor() {
		makeObservable(
			this,
			{ items: observable, create: action, edit: action, delete: action },
			{ deep: true },
		)
	}

	create = async (obj: ICourse): Promise<void> => {
		try {
			this.items.push(obj)
		} catch (error) {
			console.error(`Ошибка Курсы(Добавление): ${error}`)
		}
	}
	edit = async (obj: ICourse): Promise<void> => {
		try {
			this.items = this.items.map((item) =>
				item._id === obj._id ? (item = obj) : item,
			)
		} catch (error) {
			console.error(`Ошибка Курсы(Редактирование): ${error}`)
		}
	}
	delete = async (id: string): Promise<void> => {
		try {
			this.items.filter((item) => item._id !== id)
		} catch (error) {
			console.error(`Ошибка Курсы(Удаление): ${error}`)
		}
	}
}

export const coursecStores = new CoursecStores()
