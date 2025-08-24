const express=require('express');
const mongoose = require('mongoose');
const searchRouter = require('./routes/search');
const customerRouter = require('./routes/customer');

const app=express();

app.set('view engine','ejs');
app.set('views','views');

const bodyParser=require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(searchRouter);
app.use("/cust",customerRouter);

mongoose.connect("mongodb://localhost:27017/students").then((r)=>{
    console.log("connected to students database!");
});
app.listen(8080);

