import axios from 'axios'

import {
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT
} from './types'
import setAuthToken from '../../utils/setAuthToken'
import baseUrl from '../../utils/baseUrl'

export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}

	try {
		const res = await axios.get(`${baseUrl}/api/auth`)

		dispatch({
			type: USER_LOADED,
			payload: res.data
		})
	} catch (error) {
		console.log(error)
		dispatch({
			type: AUTH_ERROR
		})
	}
}

export const register = ({ email, password }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const body = JSON.stringify({ email, password })

	try {
		const res = await axios.post(`${baseUrl}/api/auth/signup`, body, config)
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		})

		dispatch(loadUser())
	} catch (error) {
		const errors = error.response.data.errors

		dispatch({
			type: REGISTER_FAILED
		})
	}
}

export const login = ({ email, password }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const body = JSON.stringify({ email, password })

	try {
		const res = await axios.post(`${baseUrl}/api/auth/login`, body, config)
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		})

		dispatch(loadUser())
	} catch (error) {
		const errors = error.response.data.errors

		dispatch({
			type: LOGIN_FAILED
		})
	}
}

export const logout = () => (dispatch) => {
	dispatch({
		type: LOGOUT
	})
}
