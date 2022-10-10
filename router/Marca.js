const {Router} = require('express');
const router = Router();
const Brand = require('../models/Brand'); 

router.get('/',function(req, res){
    res.send('hola marca')
   });


router.post('/',function(req, res){
 res.send('hola marca')
});


router.put('/',function(req, res){
    res.send('hola marca')
   });

module.exports = router;