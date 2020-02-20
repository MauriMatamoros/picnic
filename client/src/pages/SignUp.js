import React from 'react'
import { connect } from 'react-redux'

import AuthForm from '../components/AuthForm'
import { register } from '../redux/actions/auth'

const SignUp = ({ register }) => {
	const onSubmit = (payload) => {
		register(payload)
	}
	return <AuthForm onSubmit={onSubmit} />
}

export default connect(null, { register })(SignUp)
