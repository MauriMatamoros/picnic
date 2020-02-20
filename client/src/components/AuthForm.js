import React, { useState } from 'react'

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
			className='form'
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit(payload)
			}}
		>
			<div className='form__group'>
				<input
					className='form__input'
					id='email'
					type='email'
					name='email'
					value={payload.email}
					onChange={handleChange}
				/>
				<label for='email' className='form__label'>
					Email
				</label>
			</div>

			<div className='form__group'>
				<input
					className='form__input'
					id='password'
					type='password'
					name='password'
					value={payload.password}
					onChange={handleChange}
				/>
				<label for='password' className='form__label'>
					Password
				</label>
			</div>
			<div className='btn__box--form'>
				<input type='submit' value='Submit' className='btn btn--form' />
			</div>
		</form>
	)
}

export default AuthForm
