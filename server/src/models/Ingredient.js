const mongoose = require('mongoose')

const IngredientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	}
})

module.exports = Ingredient = mongoose.model('ingredient', IngredientSchema)
