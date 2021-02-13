import { action, makeObservable, observable } from "mobx"
import { settingsApi } from "../api"
import { ISettings } from "../types"

class SettingsStores {
	items: ISettings = {}

	constructor() {
		makeObservable(
			this,
			{ items: observable, edit: action, fetchData: action },
			{ deep: true },
		)
	}

	edit = async (obj: ISettings): Promise<void> => {
		try {
			const { data } = await settingsApi.update(obj)
			this.items = data.data
		} catch (error) {
			console.error(`Ошибка Главная(Редактирование): ${error}`)
		}
	}

	fetchData = async (): Promise<void> => {
		try {
			const { data } = await settingsApi.show()
			this.items = data.data[0]
		} catch (error) {
			console.error(`Ошибка Главная(Загрузка данных): ${error}`)
		}
	}
}

export const settingsStores = new SettingsStores()
