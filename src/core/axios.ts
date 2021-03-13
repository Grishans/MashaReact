import axios from "axios"

axios.defaults.baseURL = `${process.env.REACT_APP_LINK}api`

const token = localStorage.getItem("token")
token && (axios.defaults.headers.common["token"] = `${token}`)

export default axios
