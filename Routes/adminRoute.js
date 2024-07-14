const path = require('path');
const express=require('express');
const router=express();


router.set('view engine','ejs');
router.set('views',path.join(__dirname,'../views/admin'))


module.exports = router;