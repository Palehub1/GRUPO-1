const {Router} = require('express');
const router = Router();
const Devicestate = require('../models/Devicestate'); 

router.get('/',function(req, res){
    res.send('hola estados de equipo')
   });


router.post('/',function(req, res){
 res.send('hola estados de equipo')
});


router.put('/',function(req, res){
    res.send('hola estados de equipo')
   });

module.exports = router;