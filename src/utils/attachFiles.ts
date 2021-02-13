import { attachApi } from "../api"

export const attach = async (file: any): Promise<any> => {
	const files = new FormData()
	try {
		files.append("file", file, file.name)
		const { data } = await attachApi.create(files)
		return `${data.data.destination}/${data.data.filename}`
	} catch (error) {
		console.error(error)
	}
}
