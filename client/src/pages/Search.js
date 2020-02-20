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
		<div className='container'>
			<div className='box'>
				<div className='box__heading'>
					<h2 className='heading-secondary'>Search</h2>
				</div>
				<form className='form' onSubmit={onSubmit}>
					<div className='form__group'>
						<input
							id='search'
							onChange={handleChange}
							value={query}
							className='form__input'
						/>
						<label for='search' class='form__label'>
							Search
						</label>
					</div>
					<div className='btn__box--form'>
						<input type='submit' value='Submit' className='btn btn--form' />
					</div>
				</form>
				<IngredientsList ingredients={ingredients} />
			</div>
		</div>
	)
}

const mapStateToProps = ({ ingredients: { ingredients } }) => ({
	ingredients
})

export default connect(mapStateToProps, { searchIngredients })(Search)
