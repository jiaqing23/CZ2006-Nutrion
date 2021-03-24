const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const mealPlannerSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    dish:{
        type: [{
            dishId: String,
            day: String, //"Monday", "Tuesday", ...
            time: String, //"1600", "0730", ...
        }],
        default: []
    },
})

mealPlannerSchema.plugin(uniqueValidator)
mongoose.model("MealPlanner", mealPlannerSchema)
