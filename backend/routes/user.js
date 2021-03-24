const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const async = require('async')
const UserController = require('../controllers/user-controller')
const FavouriteListController = require('../controllers/favourite-list-controller')
const MealPlannerController = require('../controllers/meal-planner-controller')

router.get('/', (req, res) => {
    UserController.getAllUsers((err, result) => {
        if(err){
            return res.status(500).send({ message: `${err}`})
        }
        else{
            return res.status(200).send(result)
        }
    })
})

router.get('/:userId', (req, res) => {
    const {userId} = req.params;
    UserController.getAllUsers((err, result) => {
        if(err){
            return res.status(500).send({ message: `${err}`})
        }
        else{
            return res.status(200).send(result)
        }
    })
})

router.post('/', (req, res) => {
    const user = req.body;

    mongoose.startSession({}, (err, session) => {
        session.startTransaction()
        async.waterfall([
            function(callback){
                UserController.addUser(
                    user, 
                    (err, result) => {
                    if(err){
                        callback(err, null)
                    }
                    else{
                        callback(null, result.userId)
                    }
                })
            },
            function(userId, callback){
                MealPlannerController.addMealPlanner(
                    userId, 
                    (err, result) => {
                        if(err){
                            callback(err, null)
                        }
                        else{
                            callback(null, userId)
                        }
                    }
                )
            },
            function(userId, callback){
                FavouriteListController.addFavouriteList(
                    userId, 
                    (err, result) => {
                        if(err){
                            callback(err, null)
                        }
                        else{
                            callback(null, result.userId)
                        }
                    }
                )
            }
        ],(err,result)=>{
            if(err)
            {
                session.abortTransaction().then(() => {
                    session.endSession()
                    return res.status(500).send({ message: `${err}`})
                })
            }
            else 
            {
                session.commitTransaction().then(() => {
                    session.endSession()
                    return res.status(200).send(result)
                    
                })
            }
        })
    })
})

router.patch('/:userId', (req, res) => {
    const {userId} = req.params;
    UserController.addUser(
        req.body, 
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