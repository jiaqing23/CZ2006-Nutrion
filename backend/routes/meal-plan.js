const express = require('express');

const router = express.Router();

const MealPlanController = require('../controllers/meal-plan-controller')

router.get('/', (req, res) => {
    const queryMap = {}
    MealPlanController.getMealPlans(
        queryMap,
        (err, result) => {
            if(err){
                return res.status(500).send({ message: `${err}`})
            }
            else{
                return res.status(200).send(result)
            }
        }
    )
})

router.get('/:mealPlanId', (req, res) => {
    const {mealPlanId} = req.params;
    const queryMap = {mealPlanId: mealPlanId}
    MealPlanController.getMealPlans(
        queryMap, 
        (err, result) => {
            if(err){
                return res.status(500).send({ message: `${err}`})
            }
            else{
                return res.status(200).send(result[0])
            }
        }
    )
})

router.post('/', (req, res) => {
    const {dish} = req.body; //without id
    MealPlanController.addMealPlan(
        {dish: dish}, 
        (err, result) => {
        if(err){
            return res.status(500).send({ message: `${err}`})
        }
        else{
            return res.status(200).send(result)
        }
    })
})

module.exports = router