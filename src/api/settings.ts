import { AxiosPromise } from "axios"
import { axios } from "../core"
import { ISettings } from "../types"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	create: (data: ISettings): AxiosPromise => axios.post("/settings", data),
	show: (): AxiosPromise => axios.get("/settings"),
	update: (data: ISettings): AxiosPromise =>
		axios.put(`/settings/${data._id}`, data),
	delete: (id: any): AxiosPromise => axios.delete("/settings", id),
}
