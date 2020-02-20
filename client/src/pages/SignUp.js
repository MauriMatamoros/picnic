import React from 'react'
import { connect } from 'react-redux'

import AuthForm from '../components/AuthForm'
import { register } from '../redux/actions/auth'

const SignUp = ({ register }) => {
	const onSubmit = (payload) => {
		register(payload)
	}
	return (
		<div className='container'>
			<div className='box'>
				<div className='box__heading'>
					<h2 className='heading-secondary'>Signup</h2>
				</div>
				<AuthForm onSubmit={onSubmit} />
			</div>
		</div>
	)
}

export default connect(null, { register })(SignUp)
