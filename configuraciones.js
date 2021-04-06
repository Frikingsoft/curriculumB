const express = require('express')
const servidor = express()
const bases = require('./Databases/bases')
const morgan = require('morgan')


servidor.use(express.static('./dist'));
servidor.use(express.urlencoded({extended:false}))
servidor.use(express.json())
servidor.use(morgan('dev'))

servidor.listen(process.env.PORT,()=>{
    console.log("servidor ok")
})

module.exports = {
    servidor
}