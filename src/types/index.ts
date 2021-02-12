export interface ISettings {
	_id?: string
	inst?: string
	fb?: string
}

export interface IService {
	_id?: string
	title?: string
	workTime?: string
	photo?: string
}

export type TPortfolio = {
	_id?: string
	photo1?: string
	photo2?: string
	photo3?: string
	photo4?: string
	photo5?: string
	photo6?: string
}

export interface IPortfolio {
	_id?: string
	title?: string
	photos?: TPortfolio[]
}

export interface ICourse {
	_id?: string
	title?: string
	desc?: string
}

export interface IAbout {
	_id?: string
	quote?: string
	desc?: string
	photo1?: string
	photo2?: string
}

export interface IReviews {
	_id?: string
	type?: number
	file?: string
	filetype?: string
}

export interface IInst {
	_id?: string
	link?: string
	photo?: string
}

export interface IForm {
	_id?: string
	name?: string
	phone?: string
	data?: string
	type?: string
}
