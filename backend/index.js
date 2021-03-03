const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const {port, mongoConnectionString} = require("./config.js");

const app = express();
app.use(bodyParser.json({limit: '150mb'}))
app.use(cors());

const userModel = require('./models/user-model')

const User = require('./routes/user');
app.use('/user', User);

mongoose.connect(mongoConnectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex: true
},(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        app.listen(port, () => {
            console.log(`Connected to database. Server Running on Port: ${port}`);
            console.log(`http://localhost:${port}`);
        });
    }
})

