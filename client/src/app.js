require('babel-polyfill')

import React, { useEffect } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import setAuthToken from './utils/setAuthToken'
import { loadUser } from './redux/actions/auth'

import store from './redux/store'

import PrivateRoute from './routing/PrivateRoute'
import PublicRoute from './routing/PublicRoute'
import NavBar from './components/NavBar'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Ingredients from './pages/Ingredients'

import './styles/styles.scss'

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser())
	}, [])
	return (
		<Provider store={store}>
			<Router>
				<>
					<NavBar />
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<PublicRoute exact path='/login' component={Login} />
						<PublicRoute exact path='/signup' component={SignUp} />
						<PrivateRoute exact path='/ingredients' component={Ingredients} />
					</Switch>
				</>
			</Router>
		</Provider>
	)
}

render(<App />, document.getElementById('root'))
