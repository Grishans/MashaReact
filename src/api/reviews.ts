import { AxiosPromise } from "axios"
import { axios } from "../core"
import { IReviews } from "../types"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	create: (data: IReviews): AxiosPromise => axios.post("/reviews", data),
	show: (): AxiosPromise => axios.get("/reviews"),
	update: (data: IReviews): AxiosPromise =>
		axios.put(`/reviews/${data._id}`, data),
	delete: (id: any): AxiosPromise => axios.delete(`/reviews/${id}`),
}
