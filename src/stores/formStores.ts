import { action, makeObservable, observable } from "mobx"
import { formApi } from "../api"
import { IForm } from "../types"

class FormStores {
	items: IForm[] = []

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

	create = async (obj: IForm): Promise<void> => {
		try {
			const { data } = await formApi.create(obj)
			this.items.push(data.data)
		} catch (error) {
			console.error(`Ошибка Курсы(Добавление): ${error}`)
		}
	}
	edit = async (obj: IForm): Promise<void> => {
		try {
			const { data } = await formApi.update(obj)
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
			const { data } = await formApi.show()
			this.items = data.data
		} catch (error) {
			console.error(`Ошибка Главная(Загрузка данных): ${error}`)
		}
	}
}

export const formStores = new FormStores()
