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
		<div className='navbar'>
			<div>
				<Link className='navbar__link' to='/'>
					Home
				</Link>
			</div>
			<div>
				{isAuthenticated ? (
					<>
						<Link className='navbar__link' to='/ingredients'>
							Ingredients
						</Link>
						<Link className='navbar__link' to='/search'>
							Search
						</Link>
						<button className='navbar__button' onClick={() => logout()}>
							Logout
						</button>
					</>
				) : (
					<>
						<Link className='navbar__link' to='/login'>
							Login
						</Link>
						<Link className='navbar__link' to='/signup'>
							Signup
						</Link>
					</>
				)}
			</div>
		</div>
	)
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
	isAuthenticated
})

export default connect(mapStateToProps, { logout })(NavBar)
