const mongoose = require('mongoose')
const MealPlanModel = mongoose.model("MealPlan")
const { v4: uuidv4 } = require('uuid');

module.exports['getMealPlans'] = function(filterMap, callback){
    MealPlanModel.find(filterMap,(err,result)=>{
        if(err){
            callback(err)
        }
        else{
            callback(null,result)
        }
    })
}

module.exports['addMealPlan'] = function (mealPlan, callback) {
    user['mealPlanId'] =uuidv4()
    MealPlanModel.create([mealPlan]).then(result => {
        callback(null, result[0])
    }).catch(err => {
        console.log(err)
        callback(err)
    })
}
