import { action, makeObservable, observable } from "mobx"
import { portfolioApi } from "../api"
import { IPortfolio } from "../types"

class PortfolioStores {
	items: IPortfolio[] = []

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

	create = async (obj: IPortfolio): Promise<void> => {
		try {
			const { data } = await portfolioApi.create(obj)
			this.items.unshift(data.data)
		} catch (error) {
			console.error(`Ошибка Отзывы(Добавление): ${error}`)
		}
	}
	edit = async (obj: IPortfolio): Promise<void> => {
		try {
			const { data } = await portfolioApi.update(obj)
			this.items = this.items.map((item) =>
				item._id === obj._id ? (item = data.data) : item,
			)
		} catch (error) {
			console.error(`Ошибка Отзывы(Редактирование): ${error}`)
		}
	}
	delete = async (id: string): Promise<void> => {
		try {
			await portfolioApi.delete(id)
			this.items = this.items.filter((item) => item._id !== id)
		} catch (error) {
			console.error(`Ошибка Отзывы(Удаление): ${error}`)
		}
	}
	fetchData = async (): Promise<void> => {
		try {
			const { data } = await portfolioApi.show()
			this.items = data.data
		} catch (error) {
			console.error(`Ошибка Главная(Загрузка данных): ${error}`)
		}
	}
}

export const portfolioStores = new PortfolioStores()
