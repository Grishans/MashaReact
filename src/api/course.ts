import { AxiosPromise } from "axios"
import { axios } from "../core"
import { ICourse } from "../types"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	create: (data: ICourse): AxiosPromise => axios.post("/course", data),
	show: (): AxiosPromise => axios.get("/course"),
	update: (data: ICourse): AxiosPromise =>
		axios.put(`/course/${data._id}`, data),
	delete: (id: any): AxiosPromise => axios.delete(`/course/${id}`),
}
