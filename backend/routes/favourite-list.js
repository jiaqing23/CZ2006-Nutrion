const express = require('express');

const router = express.Router();

const FavouriteListController = require('../controllers/favourite-list-controller')

router.get('/:userId', (req, res) => {
    const {userId} = req.params;
    FavouriteListController.getMealPlanner(
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
    const {dish, mealPlan} = req.body;
    const {userId} = req.params;

    const updateMap = {}
    if(dish != null) updateMap.dish = dish;
    if(mealPlan != null) updateMap.mealPlan = mealPlan;

    FavouriteListController.updateFavouriteList(
        userId,
        updateMap, 
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