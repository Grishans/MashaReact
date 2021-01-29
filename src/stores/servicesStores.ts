import { action, makeObservable, observable } from "mobx"
import { IService } from "../types"

class ServicesStores {
	items: IService[] = []

	constructor() {
		makeObservable(
			this,
			{ items: observable, create: action, edit: action, delete: action },
			{ deep: true },
		)
	}

	create = async (obj: IService): Promise<void> => {
		try {
			this.items.push(obj)
		} catch (error) {
			console.error(`Ошибка Услуги(Добавление): ${error}`)
		}
	}
	edit = async (obj: IService): Promise<void> => {
		try {
			this.items = this.items.map((item) =>
				item._id === obj._id ? (item = obj) : item,
			)
		} catch (error) {
			console.error(`Ошибка Услуги(Редактирование): ${error}`)
		}
	}
	delete = async (id: string): Promise<void> => {
		try {
			this.items.filter((item) => item._id !== id)
		} catch (error) {
			console.error(`Ошибка Услуги(Удаление): ${error}`)
		}
	}
}

export const servicesStores = new ServicesStores()
