import axios from 'axios'

import {
	POST_INGREDIENT,
	GET_INGREDIENT,
	GET_INGREDIENTS,
	PUT_INGREDIENT,
	DELETE_INGREDIENT,
	SEARCH_INGREDIENTS
} from './types'
import baseUrl from '../../utils/baseUrl'

export const getIngredients = () => async (dispatch) => {
	try {
		const { data } = await axios.get(`${baseUrl}/api/ingredients`)
		dispatch({
			type: GET_INGREDIENTS,
			payload: data
		})
	} catch (error) {
		console.log(error)
	}
}

export const deleteIngredient = (id) => async (dispatch) => {
	try {
		const { data } = await axios.delete(`${baseUrl}/api/ingredients/${id}`)
		dispatch({
			type: DELETE_INGREDIENT,
			payload: data
		})
	} catch (error) {
		console.log(error)
	}
}

export const getIngredient = (id) => async (dispatch) => {
	try {
		const { data } = await axios.get(`${baseUrl}/api/ingredients/${id}`)
		dispatch({
			type: GET_INGREDIENT,
			payload: data
		})
	} catch (error) {
		console.log(error)
	}
}

export const updateIngredient = (ingredient) => async (dispatch) => {
	try {
		const { _id, name = '', description = '' } = ingredient
		let body = {}
		if (name) {
			body.name = name
		}
		if (description) {
			body.description = description
		}
		const { data } = await axios.put(`${baseUrl}/api/ingredients/${_id}`, body)
		dispatch({
			type: PUT_INGREDIENT,
			payload: data
		})
	} catch (error) {
		console.log(error)
	}
}

export const addIngredient = (ingredient) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const body = JSON.stringify(ingredient)
	try {
		const { data } = await axios.post(
			`${baseUrl}/api/ingredients/`,
			body,
			config
		)
		dispatch({
			type: POST_INGREDIENT,
			payload: data
		})
	} catch (error) {
		console.log(error)
	}
}

export const searchIngredients = (query) => async (dispatch) => {
	try {
		const { data } = await axios.post(
			`${baseUrl}/api/ingredients/search/${query}`
		)
		dispatch({
			type: SEARCH_INGREDIENTS,
			payload: data
		})
	} catch (error) {}
}
