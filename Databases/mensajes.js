const {Schema} =require('mongoose')
const mongoose = require('./bases')
const Mensaje = new Schema({
    nombre:{
        type:String
    },
    mensaje:{
        type:String
    },
    rating:{
        type: Number
    },
  
}) 
module.exports = mongoose.model('mensaje',Mensaje)