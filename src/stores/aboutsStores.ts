import { action, makeObservable, observable } from "mobx"
import { aboutApi } from "../api"
import { IAbout } from "../types"

class AboutsStores {
	items: IAbout = {}

	constructor() {
		makeObservable(
			this,
			{ items: observable, edit: action, fetchData: action },
			{ deep: true },
		)
	}

	edit = async (obj: IAbout): Promise<void> => {
		try {
			const { data } = await aboutApi.update(obj)
			this.items = data.data
		} catch (error) {
			console.error(`Ошибка О Себе(Редактирование): ${error}`)
		}
	}

	fetchData = async (): Promise<void> => {
		try {
			const { data } = await aboutApi.show()
			this.items = data.data[0]
		} catch (error) {
			console.error(`Ошибка Главная(Загрузка данных): ${error}`)
		}
	}
}

export const aboutsStores = new AboutsStores()
