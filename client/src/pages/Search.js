import React, { useState } from 'react'
import { connect } from 'react-redux'

import { searchIngredients } from '../redux/actions/ingredients'
import IngredientsList from '../components/IngredientsList'

const Search = ({ ingredients, searchIngredients }) => {
	const [query, setQuery] = useState('')
	const handleChange = (e) => {
		const { value } = e.target
		setQuery(value)
	}
	const onSubmit = (e) => {
		e.preventDefault()
		searchIngredients(query)
	}
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input onChange={handleChange} value={query} />
				<input type='submit' value='Submit' />
			</form>
			<IngredientsList ingredients={ingredients} />
		</div>
	)
}

const mapStateToProps = ({ ingredients: { ingredients } }) => ({
	ingredients
})

export default connect(mapStateToProps, { searchIngredients })(Search)
