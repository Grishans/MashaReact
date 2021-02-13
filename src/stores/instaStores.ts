import { action, makeObservable, observable } from "mobx"
import { instApi } from "../api"
import { IInst } from "../types"

class InstaStores {
	items: IInst[] = []

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

	create = async (obj: IInst): Promise<void> => {
		try {
			const { data } = await instApi.create(obj)
			this.items.unshift(data.data)
		} catch (error) {
			console.error(`Ошибка Инстаграмм(Добавление): ${error}`)
		}
	}
	edit = async (obj: IInst): Promise<void> => {
		try {
			const { data } = await instApi.update(obj)
			this.items = this.items.map((item) =>
				item._id === obj._id ? (item = data.data) : item,
			)
		} catch (error) {
			console.error(`Ошибка Инстаграмм(Редактирование): ${error}`)
		}
	}
	delete = async (id: string): Promise<void> => {
		try {
			await instApi.delete(id)
			this.items = this.items.filter((item) => item._id !== id)
		} catch (error) {
			console.error(`Ошибка Инстаграмм(Удаление): ${error}`)
		}
	}
	fetchData = async (): Promise<void> => {
		try {
			const { data } = await instApi.show()
			this.items = data.data
		} catch (error) {
			console.error(`Ошибка Главная(Загрузка данных): ${error}`)
		}
	}
}

export const instaStores = new InstaStores()
