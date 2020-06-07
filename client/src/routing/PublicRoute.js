import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({
	component: Component,
	auth: { isAuthenticated, loading },
	...rest
}) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated && !loading ? (
				<Redirect to='/ingredients' />
			) : (
				<Component {...props} />
			)
		}
	/>
)

const mapStateToProps = (state) => ({
	auth: state.auth
})

export default connect(mapStateToProps)(PublicRoute)