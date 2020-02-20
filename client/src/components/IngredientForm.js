import React, { useState } from 'react'

const IngredientForm = ({ onSubmit }) => {
	const INITIAL_STATE = {
		name: '',
		description: ''
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
					type='text'
					name='name'
					id='name'
					value={payload.name}
					onChange={handleChange}
				/>
				<label for='name' class='form__label'>
					Name
				</label>
			</div>
			<div className='form__group'>
				<textarea
					className='form__input'
					name='description'
					value={payload.description}
					onChange={handleChange}
					id='description'
				/>
				<label for='name' class='form__label'>
					Description
				</label>
			</div>
			<div className='btn__box--form'>
				<input type='submit' value='Submit' className='btn btn--form' />
			</div>
		</form>
	)
}

export default IngredientForm
