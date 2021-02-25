import { AxiosPromise } from "axios"
import { axios } from "../core"
import { IForm } from "../types"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	create: (data: IForm): AxiosPromise => axios.post("/forms", data),
	show: (): AxiosPromise => axios.get("/forms"),
	update: (data: IForm): AxiosPromise => axios.put(`/forms/${data._id}`, data),
	delete: (id: any): AxiosPromise => axios.delete(`/forms/${id}`),
}
