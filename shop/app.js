const express=require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
//const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.get("/search",(req,res)=>{
    res.write('<h1>Hossam</h1>');
    res.end("<h1>First Application</h1>")
    });
app.listen(8080);
