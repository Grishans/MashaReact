import { AxiosPromise } from "axios"
import { axios } from "../core"
import { IInst } from "../types"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	create: (data: IInst): AxiosPromise => axios.post("/inst", data),
	show: (): AxiosPromise => axios.get("/inst"),
	update: (data: IInst): AxiosPromise => axios.put(`/inst/${data._id}`, data),
	delete: (id: any): AxiosPromise => axios.delete(`/inst/${id}`),
}
