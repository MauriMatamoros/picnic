import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteIngredient } from '../redux/actions/ingredients'

const IngredientItem = ({ _id, name, description, deleteIngredient }) => {
	return (
		<div className='ingredient'>
			<div>
				<Link className='ingredient__name' to={`/ingredients/${_id}`}>
					{name}
				</Link>
				<p className='ingredient__description'>{description}</p>
			</div>
			<div>
				<button
					className='ingredient__button'
					onClick={() => deleteIngredient(_id)}
				>
					remove
				</button>
			</div>
		</div>
	)
}

export default connect(null, { deleteIngredient })(IngredientItem)
