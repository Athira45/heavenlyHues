const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
require('dotenv').config();
const dbconnect = require('./config/dbconnect');
const port = process.env.port || 4000
dbconnect();


const adminRoute = require('./Routes/adminRoute');
const userRoute = require('./Routes/userRoute');


// app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(session({
    secret:process.env.SESSION_SECRET_KEY,
    resave:false,
    saveUninitialized:true,    
}));
app.use('/admin',adminRoute);
app.use('/',userRoute);

console.log(port);
app.listen(port,()=>{console.log("http://localhost:4000 and http://localhost:4000/admin")})