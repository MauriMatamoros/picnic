const express = require('express')
const { check } = require('express-validator')

const auth = require('../../middleware/auth')
const validationResult = require('../../middleware/validationResult')
const Ingredient = require('../../models/Ingredient')

const router = express.Router()

router.post(
	'/',
	auth,
	[
		check('name', 'Please enter a name with 1 or more characters').isLength({
			min: 1
		}),
		check(
			'description',
			'Please enter a description with 1 or more characters'
		).isLength({ min: 1 })
	],
	validationResult,
	async (req, res) => {
		try {
			const { name, description } = req.body
			const ingredient = await new Ingredient({
				name,
				description,
				user: req.user
			}).save()
			res.status(201).json({ ingredient })
		} catch (error) {
			console.error(error)
			res.status(500).send('Error posting ingredient. Please try again later.')
		}
	}
)

router.put('/:id', auth, async (req, res) => {
	try {
		const { name, description } = req.body
		const query = { _id: req.params.id, user: req.user }
		const update = {}
		if (name) {
			update.name = name
		}
		if (description) {
			update.description = description
		}

		let ingredient = await Ingredient.findOne(query)
		if (!ingredient) {
			return res
				.status(404)
				.json({ errors: [{ msg: 'Ingredient not found.' }] })
		}
		ingredient = await Ingredient.findOneAndUpdate(query, update, { new: true })
		res.status(200).json({ ingredient })
	} catch (error) {
		console.error(error)
		res.status(500).send('Error updating ingredient. Please try again later.')
	}
})

router.delete('/:id', auth, async (req, res) => {
	try {
		const query = { _id: req.params.id, user: req.user }
		let ingredient = await Ingredient.findOne(query)
		if (!ingredient) {
			return res
				.status(404)
				.json({ errors: [{ msg: 'Ingredient not found.' }] })
		}
		ingredient = await Ingredient.findByIdAndDelete(query)
		res.status(200).json({ ingredient })
	} catch (error) {
		console.error(error)
		res.status(500).send('Error deleting ingredient. Please try again later.')
	}
})

router.get('/:id', auth, async (req, res) => {
	try {
		const query = { _id: req.params.id, user: req.user }
		const ingredient = await Ingredient.findOne(query)
		if (!ingredient) {
			return res
				.status(404)
				.json({ errors: [{ msg: 'Ingredient not found.' }] })
		}
		res.status(200).json({ ingredient })
	} catch (error) {
		console.error(error)
		res.status(500).send('Error fetching ingredient. Please try again later.')
	}
})

router.get('/', auth, async (req, res) => {
	try {
		const ingredients = await Ingredient.find({ user: req.user })
		res.status(200).json({ ingredients })
	} catch (error) {
		console.error(error)
		res.status(500).send('Error fetching ingredients. Please try again later.')
	}
})

router.post('/search/:query', auth, async (req, res) => {
	const regEx = { $regex: `.*${req.params.query}.*`, $options: 'i' }
	try {
		const ingredients = await Ingredient.find({
			$or: [{ name: regEx }, { description: regEx }]
		})
		res.status(200).json({ ingredients })
	} catch (error) {
		console.error(error)
		res.status(500).send('Error fetching ingredients. Please try again later.')
	}
})

module.exports = router
