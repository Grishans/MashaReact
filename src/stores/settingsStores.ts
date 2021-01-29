import { action, makeObservable, observable } from "mobx"
import { ISettings } from "../types"

class SettingsStores {
	items: ISettings = {}

	constructor() {
		makeObservable(this, { items: observable, edit: action }, { deep: true })
	}

	edit = async (obj: ISettings): Promise<void> => {
		try {
			this.items = obj
		} catch (error) {
			console.error(`Ошибка Главная(Редактирование): ${error}`)
		}
	}
}

export const settingsStores = new SettingsStores()
