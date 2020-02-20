import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import IngredientsList from '../components/IngredientsList'
import IngredientForm from '../components/IngredientForm'

import { getIngredients, addIngredient } from '../redux/actions/ingredients'

const Ingredients = ({ ingredients, getIngredients, addIngredient }) => {
	useEffect(() => {
		getIngredients()
	}, [])

	const onSubmit = (payload) => {
		addIngredient(payload)
	}
	return (
		<div className='container'>
			<div className='box'>
				<div className='box__heading'>
					<h2 className='heading-secondary'>Ingredients</h2>
				</div>
				<IngredientForm onSubmit={onSubmit} />
				<IngredientsList ingredients={ingredients} />
			</div>
		</div>
	)
}

const mapStateToProps = ({ ingredients: { ingredients } }) => ({
	ingredients
})

export default connect(mapStateToProps, { getIngredients, addIngredient })(
	Ingredients
)
