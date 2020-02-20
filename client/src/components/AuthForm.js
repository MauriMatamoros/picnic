import React, { useState, useEffect } from 'react'

const AuthForm = ({ onSubmit }) => {
	const INITIAL_STATE = {
		email: '',
		password: ''
	}
	const [payload, setPayload] = useState(INITIAL_STATE)

	const handleChange = (e) => {
		const { name, value } = e.target
		setPayload((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit(payload)
			}}
		>
			<label>Email</label>
			<input
				type='text'
				name='email'
				value={payload.email}
				onChange={handleChange}
			/>
			<label>Password</label>
			<input
				type='password'
				name='password'
				value={payload.password}
				onChange={handleChange}
			/>
			<input type='submit' value='Submit' />
		</form>
	)
}

export default AuthForm
