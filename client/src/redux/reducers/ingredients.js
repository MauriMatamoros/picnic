import {
	POST_INGREDIENT,
	GET_INGREDIENT,
	GET_INGREDIENTS,
	PUT_INGREDIENT,
	DELETE_INGREDIENT,
	SEARCH_INGREDIENTS
} from '../actions/types'

const initialState = {
	loading: true,
	ingredient: null,
	ingredients: []
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case POST_INGREDIENT:
			return {
				...state,
				loading: false,
				ingredients: [...state.ingredients, payload.ingredient]
			}
		case SEARCH_INGREDIENTS:
		case GET_INGREDIENTS:
			return {
				...state,
				loading: false,
				ingredients: payload.ingredients
			}
		case GET_INGREDIENT:
			return {
				...state,
				loading: false,
				ingredient: payload.ingredient
			}
		case PUT_INGREDIENT:
			return {
				...state,
				loading: false,
				ingredient: payload.ingredient
			}
		case DELETE_INGREDIENT:
			return {
				...state,
				loading: false,
				ingredients: state.ingredients.filter(
					(ingredient) => ingredient._id !== payload.ingredient._id
				)
			}
		default:
			return state
	}
}
