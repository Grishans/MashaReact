import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import Home from "./page/Home"
import Admin from "./page/Admin"
import { settingsStores } from "./stores/settingsStores"
import { servicesStores } from "./stores/servicesStores"
import { coursecStores } from "./stores/coursesStores"
import { aboutsStores } from "./stores/aboutsStores"
import { reviewsStores } from "./stores/reviewsStores"
import { instaStores } from "./stores/instaStores"
import { portfolioStores } from "./stores/portfolioStores"

const App: React.FC = (): React.ReactElement => {
	React.useEffect(() => {
		settingsStores.fetchData()
		servicesStores.fetchData()
		coursecStores.fetchData()
		aboutsStores.fetchData()
		reviewsStores.fetchData()
		instaStores.fetchData()
		portfolioStores.fetchData()
	}, [])
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/admin' exact component={Admin} />
		</Switch>
	)
}

export default App
