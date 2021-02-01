import { action, makeObservable, observable } from "mobx"
import { IReviews } from "../types"

class ReviewsStores {
	items: IReviews[] = []

	constructor() {
		makeObservable(
			this,
			{ items: observable, create: action, edit: action, delete: action },
			{ deep: true },
		)
	}

	create = async (obj: IReviews): Promise<void> => {
		try {
			this.items.unshift(obj)
		} catch (error) {
			console.error(`Ошибка Отзывы(Добавление): ${error}`)
		}
	}
	edit = async (obj: IReviews): Promise<void> => {
		try {
			this.items = this.items.map((item) =>
				item._id === obj._id ? (item = obj) : item,
			)
		} catch (error) {
			console.error(`Ошибка Отзывы(Редактирование): ${error}`)
		}
	}
	delete = async (id: string): Promise<void> => {
		try {
			this.items = this.items.filter((item) => item._id !== id)
		} catch (error) {
			console.error(`Ошибка Отзывы(Удаление): ${error}`)
		}
	}
}

export const reviewsStores = new ReviewsStores()
