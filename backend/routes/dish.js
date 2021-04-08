const express = require('express');

const router = express.Router();

const DishController = require('../controllers/dish-controller')
const SpoonacularController = require('../controllers/spoonacular-controller')

router.get('/', (req, res) => {
    const queryMap = {}

    const {search, id} = req.query;
    if(id) queryMap.dishId = id;

    if(search){
        SpoonacularController.getDishes(
            100, search,
            (err, result) => {
                if(err){
                    return res.status(500).send({ message: `${err}`})
                }
                else{
                    console.log(search);
                    return res.status(200).send(result)
                }
            }
        )

        
    }
    else{
        DishController.getDishes(
            queryMap,
            (err, result) => {
                if(err){
                    return res.status(500).send({ message: `${err}`})
                }
                else{
                    if(result.length == 0 && id){
                        console.log("Fetching api from Spoonacular, dishId =", id);
                        SpoonacularController.getDishByIds(
                            [id], 
                            (err, data) => {
                                if(err) return res.status(500).send({ message: `${err}`});
                                else return res.status(200).send(data);
                            }
                        )
                    }
                    else return res.status(200).send(result)
                }
            }
        )
    }
})

module.exports = router