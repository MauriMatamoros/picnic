import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { logout } from '../redux/actions/auth'

const NavBar = ({ isAuthenticated, logout }) => {
	const location = useLocation()
	return location.pathname === '/' ? (
		<></>
	) : (
		<div>
			<Link to='/'>LandingPage</Link>
			{isAuthenticated ? (
				<>
					<Link to='/ingredients'>Ingredients</Link>
					<Link to='/search'>Search</Link>
					<button onClick={() => logout()}>Logout</button>
				</>
			) : (
				<>
					<Link to='/login'>Login</Link>
					<Link to='/signup'>Signup</Link>
				</>
			)}
		</div>
	)
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
	isAuthenticated
})

export default connect(mapStateToProps, { logout })(NavBar)
