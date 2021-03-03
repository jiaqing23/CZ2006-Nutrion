const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    email: {
        type: String,
        unique: true,
        uniqueCaseInsensitive: true
    },
    firstName:{
        type: String,
        default:''
    },
    lastName:{
        type: String,
        default:''
    },
    gender:{
        type: String
    },
    password: {
        type: String,
        required: true

    },
    profilePicture:{
        type:String
    },
    verified: {
        type: Boolean,
        default: false
    },
})

userSchema.plugin(uniqueValidator)
mongoose.model("User", userSchema)
