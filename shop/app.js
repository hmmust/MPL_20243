const express=require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
//const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

const searchController = require("./controllers/search");

app.post("/search",searchController.postSearch);
app.get("/search",searchController.getSearch);
app.get("/",searchController.getHome);    

//app.all("*",(req,res,next)=>{
//        res.send("<h1>Page Not Found</h1>")
//    });  
app.listen(8080);
