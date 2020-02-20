import React from 'react'
import { connect } from 'react-redux'

import AuthForm from '../components/AuthForm'
import { login } from '../redux/actions/auth'

const Login = ({ login }) => {
	const onSubmit = (payload) => {
		login(payload)
	}
	return <AuthForm onSubmit={onSubmit} />
}

export default connect(null, { login })(Login)
