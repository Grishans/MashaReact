import { action, makeObservable, observable } from "mobx"
import { reviewsApi } from "../api"
import { IReviews } from "../types"

class ReviewsStores {
	items: IReviews[] = []

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

	create = async (obj: IReviews): Promise<void> => {
		try {
			const { data } = await reviewsApi.create(obj)
			this.items.unshift(data.data)
		} catch (error) {
			console.error(`Ошибка Отзывы(Добавление): ${error}`)
		}
	}
	edit = async (obj: IReviews): Promise<void> => {
		try {
			const { data } = await reviewsApi.update(obj)
			this.items = this.items.map((item) =>
				item._id === obj._id ? (item = data.data) : item,
			)
		} catch (error) {
			console.error(`Ошибка Отзывы(Редактирование): ${error}`)
		}
	}
	delete = async (id: string): Promise<void> => {
		try {
			await reviewsApi.delete(id)
			this.items = this.items.filter((item) => item._id !== id)
		} catch (error) {
			console.error(`Ошибка Отзывы(Удаление): ${error}`)
		}
	}
	fetchData = async (): Promise<void> => {
		try {
			const { data } = await reviewsApi.show()
			this.items = data.data
		} catch (error) {
			console.error(`Ошибка Главная(Загрузка данных): ${error}`)
		}
	}
}

export const reviewsStores = new ReviewsStores()
