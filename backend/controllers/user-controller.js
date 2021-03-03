const mongoose = require('mongoose')
const UserModel = mongoose.model("User")
const { v4: uuidv4 } = require('uuid');

module.exports['getAllUsers'] = function(callback){
    UserModel.find({},(err,result)=>{
        if(err)
        {
            callback(err)
        }
        else 
        {
            callback(null,result)
        }
    })
}

module.exports['addUser'] = function (user, callback) {
    user['userId'] =uuidv4()
    UserModel.create([user]).then(result => {
        callback(null, result[0])
    }).catch(err => {
        console.log(err)
        callback(err)
    })
}