import { action, makeObservable, observable } from "mobx"
import { serviceApi } from "../api"
import { IService } from "../types"

class ServicesStores {
	items: IService[] = []

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

	create = async (obj: IService): Promise<void> => {
		try {
			const { data } = await serviceApi.create(obj)
			this.items.unshift(data.data)
		} catch (error) {
			console.error(`Ошибка Услуги(Добавление): ${error}`)
		}
	}
	edit = async (obj: IService): Promise<void> => {
		try {
			const { data } = await serviceApi.update(obj)
			this.items = this.items.map((item) =>
				item._id === obj._id ? (item = data.data) : item,
			)
		} catch (error) {
			console.error(`Ошибка Услуги(Редактирование): ${error}`)
		}
	}
	delete = async (id: string): Promise<void> => {
		try {
			await serviceApi.delete(id)
			this.items = this.items.filter((item) => item._id !== id)
		} catch (error) {
			console.error(`Ошибка Услуги(Удаление): ${error}`)
		}
	}
	fetchData = async (): Promise<void> => {
		try {
			const { data } = await serviceApi.show()
			this.items = data.data
		} catch (error) {
			console.error(`Ошибка Главная(Загрузка данных): ${error}`)
		}
	}
}

export const servicesStores = new ServicesStores()
