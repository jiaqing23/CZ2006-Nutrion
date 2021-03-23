const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const mealPlanSchema = mongoose.Schema({
    mealPlanId: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    dish:{
        type: [{
            dishId: String,
            time: String
        }],
        default: []
    },
})

mealPlanSchema.plugin(uniqueValidator)
mongoose.model("MealPlan", mealPlanSchema)
