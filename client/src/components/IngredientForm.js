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
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit(payload)
			}}
		>
			<label>Name</label>
			<input
				type='text'
				name='name'
				value={payload.name}
				onChange={handleChange}
			/>
			<label>Description</label>
			<textarea
				name='description'
				value={payload.description}
				onChange={handleChange}
			/>
			<input type='submit' value='Submit' />
		</form>
	)
}

export default IngredientForm
