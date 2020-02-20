import React from 'react'
import { connect } from 'react-redux'

import AuthForm from '../components/AuthForm'
import { login } from '../redux/actions/auth'

const Login = ({ login }) => {
	const onSubmit = (payload) => {
		login(payload)
	}
	return (
		<div className='container'>
			<div className='box'>
				<div className='box__heading'>
					<h2 className='heading-secondary'>Login</h2>
				</div>
				<AuthForm onSubmit={onSubmit} />
			</div>
		</div>
	)
}

export default connect(null, { login })(Login)
