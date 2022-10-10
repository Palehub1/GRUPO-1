const {Router} = require('express');
const router = Router();
const User = require('../models/User');



router.post('/', async function (req, res) {
  console.log(req.body);
  res.send(req.body);
 try{

  const UserExistente = await User.find({Email: req.body.Email});
  console.log(UserExistente );
  if (UserExistente){
    return res.send( 'Ya existe el usuario' )
  }

  let Usuario = new User();
  Usuario.nombre = req.body.Nombre;
  Usuario.email = req.body.Email;
  Usuario.estado = req.body.Estado;
  Usuario.FechaCreacion = new Date();
  Usuario.FechaActualizacion = new Date();

  Usuario = await Usuario.save();
  res.send(Usuario);
  } catch(error){

    console.log(error);
  }
  
  });


  router.get('/', function (req, res) {
    res.send('hola estamos en usuarios');
  });
  

  router.put('/', async function (req, res) {

    try{

      let Usuario = await User.findOne({Email: req.body.Email});
      console.log(UserExistente );
      if (UserExistente){
        return res.send( 'Ya existe el usuario' )
      }
    
    
      Usuario.nombre = req.body.nombre;
      Usuario.email = req.body.email;
      Usuario.estado = req.body.estado;
      Usuario.fechaCreacion = new Date();
      Usuario.fechaActualizacion = new Date();
    
      Usuario = await Usuario.save();
      res.send(Usuario);
      } catch(error){
    
        console.log(error);
      }
      

  });

  module.exports= router;
  