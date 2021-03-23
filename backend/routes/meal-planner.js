const express = require('express');

const router = express.Router();

const MealPlannerController = require('../controllers/meal-planner-controller')

router.get('/:userId', (req, res) => {
    const {userId} = req.params;
    MealPlannerController.getMealPlanner(
        userId, 
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

router.patch('/:userId', (req, res) => {
    const {dish} = req.body;
    const {userId} = req.params;
    MealPlannerController.updateMealPlanner(
        userId,
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