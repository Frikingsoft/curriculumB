const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nicobarone48:Nacional22$$448@cluster0.hlzgu.mongodb.net/curriculum?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,})
.then(db=>console.log("conectado a la base de datos"))
.catch(err=> console.log(err))
module.exports = mongoose

