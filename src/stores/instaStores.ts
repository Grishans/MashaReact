import { action, makeObservable, observable } from "mobx"
import { IInst } from "../types"

class InstaStores {
	items: IInst[] = []

	constructor() {
		makeObservable(
			this,
			{ items: observable, create: action, edit: action, delete: action },
			{ deep: true },
		)
	}

	create = async (obj: IInst): Promise<void> => {
		try {
			this.items.unshift(obj)
		} catch (error) {
			console.error(`Ошибка Инстаграмм(Добавление): ${error}`)
		}
	}
	edit = async (obj: IInst): Promise<void> => {
		try {
			this.items = this.items.map((item) =>
				item._id === obj._id ? (item = obj) : item,
			)
		} catch (error) {
			console.error(`Ошибка Инстаграмм(Редактирование): ${error}`)
		}
	}
	delete = async (id: string): Promise<void> => {
		try {
			this.items = this.items.filter((item) => item._id !== id)
		} catch (error) {
			console.error(`Ошибка Инстаграмм(Удаление): ${error}`)
		}
	}
}

export const instaStores = new InstaStores()
