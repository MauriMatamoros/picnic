import React from 'react'

import IngredientItem from './IngredientItem'

const IngredientsList = ({ ingredients }) => (
	<div>
		{ingredients.map((ingredient) => (
			<IngredientItem key={ingredient._id} {...ingredient} />
		))}
	</div>
)

export default IngredientsList
