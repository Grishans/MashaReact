import axios from "axios"

axios.defaults.baseURL = "http://localhost:5053/api"

const token = localStorage.getItem("token")
token && (axios.defaults.headers.common["token"] = `${token}`)

export default axios
