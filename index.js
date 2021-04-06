const {servidor} = require("./configuraciones")


servidor.get('/',(req , res)=>{ 
    res.status(200).sendFile('./dist/index.html')
 })

servidor.post('/contacto',(req , res)=>{
  const guardarMensaje= require('./Databases/mensajes')
   let {nombre,mensaje,rating} = req.body
   let usuario={
       nombre,
       mensaje,
       rating
   }
   let elusuario = new guardarMensaje(usuario)
   elusuario.save()
  
})