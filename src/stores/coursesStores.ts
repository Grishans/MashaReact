import { action, makeObservable, observable } from "mobx"
import { courseApi } from "../api"
import { ICourse } from "../types"

class CoursecStores {
	items: ICourse[] = []

	constructor() {
		makeObservable(
			this,
			{
				items: observable,
				create: action,
				edit: action,
				delete: action,
				fetchData: action,
			},
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
			const { data } = await courseApi.update(obj)
			this.items = this.items.map((item) =>
				item._id === obj._id ? (item = data.data) : item,
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
	fetchData = async (): Promise<void> => {
		try {
			const { data } = await courseApi.show()
			this.items = data.data
		} catch (error) {
			console.error(`Ошибка Главная(Загрузка данных): ${error}`)
		}
	}
}

export const coursecStores = new CoursecStores()
