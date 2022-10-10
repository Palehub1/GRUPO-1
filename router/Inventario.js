const {Router} = require('express');
const router = Router();
const Inventory = require('../models/Inventory'); 

router.get('/',function(req, res){
    res.send('Hola inventarios')
   });


router.post('/',function(req, res){
 res.send('Hola inventarios')
});


router.put('/',function(req, res){
    res.send('Hola inventarios')
   });

module.exports = router;