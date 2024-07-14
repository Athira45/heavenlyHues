
const path = require('path');
const express=require('express');
const router=express();
const userController = require('../controller/userController')


router.set('view engine','ejs');
router.set('views',path.join(__dirname,'../views/user'))

router.get('/',userController.LoadIndex);

router.get('/signup',userController.LoadSignup);


module.exports = router;