import React from "react"

import { Select } from "antd"
import "antd/dist/antd.css"

type TAdminBTNProps = {
	Add?: boolean
	Save?: boolean
	Cross?: boolean
	DropDn?: boolean
	onClick?: () => void
	disabled?: boolean
}

const AdminBTN: React.FC<TAdminBTNProps> = ({
	Add,
	Save,
	Cross,
	DropDn,
	onClick,
	disabled,
}): React.ReactElement => {
	const { Option } = Select

	function handleChange(value: any) {
		console.log(`selected ${value}`)
	}
	return (
		<>
			{Add && (
				<button id='adminADD' className='adminADD'>
					+ Добавить
				</button>
			)}
			{Save && (
				<button className='adminSAVE' onClick={onClick} disabled={disabled}>
					Сохранить
				</button>
			)}
			{Cross && (
				<img
					src='../img/admin_cross.svg'
					alt=''
					className='adminCross'
					onClick={onClick}
				/>
			)}
			{DropDn && (
				<Select defaultValue='Свадебный макияж' onChange={handleChange}>
					<Option value='Свадебный макияж'>Свадебный макияж</Option>
					<Option value='Вечерний макияж'>Вечерний макияж</Option>
					<Option value='Дневной макияж'>Дневной макияж</Option>
				</Select>
			)}
		</>
	)
}

export default AdminBTN
