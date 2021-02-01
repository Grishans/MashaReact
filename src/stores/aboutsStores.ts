import { action, makeObservable, observable } from "mobx"
import { IAbout } from "../types"

class AboutsStores {
	items: IAbout = {
		_id: String(Math.round(Math.random() * 10)),
		quote: "Чего то там",
		desc: "Описание",
	}

	constructor() {
		makeObservable(this, { items: observable, edit: action }, { deep: true })
	}

	edit = async (obj: IAbout): Promise<void> => {
		try {
			this.items = obj
			console.log("obj", this.items)
		} catch (error) {
			console.error(`Ошибка О Себе(Редактирование): ${error}`)
		}
	}
}

export const aboutsStores = new AboutsStores()
