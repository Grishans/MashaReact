import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { settingsStores } from "./stores/settingsStores"
import { servicesStores } from "./stores/servicesStores"
import { coursecStores } from "./stores/coursesStores"
import { aboutsStores } from "./stores/aboutsStores"
const store: any[] = [
	{
		set: settingsStores.items,
		serv: servicesStores.items,
		cours: coursecStores.items,
		about: aboutsStores.items,
	},
]
window.stores = store
ReactDOM.render(
	<React.Fragment>
		<Router>
			<App />
		</Router>
	</React.Fragment>,
	document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
