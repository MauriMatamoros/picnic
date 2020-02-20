import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getIngredient, updateIngredient } from '../redux/actions/ingredients'
import IngredientItem from '../components/IngredientItem'
import IngredientForm from '../components/IngredientForm'

const Ingredient = ({ ingredient, getIngredient, updateIngredient }) => {
	const { id } = useParams()

	useEffect(() => {
		getIngredient(id)
	}, [])

	const onSubmit = (payload) => {
		updateIngredient({ _id: id, ...payload })
	}

	return (
		<div className='container'>
			<div className='box'>
				<div className='box__heading'>
					<h2 className='heading-secondary'>Edit</h2>
				</div>
				<IngredientItem {...ingredient} />
				<IngredientForm onSubmit={onSubmit} />
			</div>
		</div>
	)
}

const mapStateToProps = ({ ingredients: { ingredient } }) => ({
	ingredient
})

export default connect(mapStateToProps, { getIngredient, updateIngredient })(
	Ingredient
)
