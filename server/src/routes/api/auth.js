const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { check } = require('express-validator')

const auth = require('../../middleware/auth')
const validationResult = require('../../middleware/validationResult')
const User = require('../../models/User')

const router = express.Router()

router.post(
	'/signup',
	[
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 })
	],
	validationResult,
	async (req, res) => {
		try {
			const { email, password } = req.body
			let user = await User.findOne({ email })
			if (user) {
				return res.status(422).json({
					errors: [{ msg: `User already exists with email: ${email}` }]
				})
			}
			const hash = await bcrypt.hash(password, 10)
			user = await new User({
				email,
				password: hash
			}).save()
			const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
				expiresIn: '1d'
			})
			res.status(201).json({ token })
		} catch (error) {
			console.error(error)
			res.status(500).send('Error signing up user. Please try again later.')
		}
	}
)

router.post(
	'/login',
	[
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 })
	],
	validationResult,
	async (req, res) => {
		try {
			const { email, password } = req.body
			let user = await User.findOne({ email }).select('+password')
			if (!user) {
				return res.status(404).send(`User with email ${email} not found.`)
			}
			const passwordsMatch = await bcrypt.compare(password, user.password)
			if (passwordsMatch) {
				const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
					expiresIn: '1d'
				})
				res.status(201).json({ token })
			} else {
				res.status(401).json({
					errors: [
						{
							msg: 'Passwords do not match.'
						}
					]
				})
			}
		} catch (error) {
			console.error(error)
			res.status(500).send('Error signing up user. Please try again later.')
		}
	}
)

router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user).select('-password')
		res.json(user)
	} catch (error) {
		console.error(error.message)
		res.status(500).send('Server Error. Unable to fetch user.')
	}
})

module.exports = router
