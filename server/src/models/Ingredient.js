const mongoose = require('mongoose')

const IngredientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	}
})

module.exports = Ingredient = mongoose.model('ingredient', IngredientSchema)
