const express=require('express');
const searchRouter = require('./routes/search');
const customerRouter = require('./routes/customer');

const app=express();

app.set('view engine','ejs');
app.set('views','views');
//const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
//app.all("*",(req,res,next)=>{
//        res.send("<h1>Page Not Found</h1>")
//    });  
app.use(searchRouter);
app.use("/cust",customerRouter);
app.listen(8080);

