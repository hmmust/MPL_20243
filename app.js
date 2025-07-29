const express=require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
const bodyParser=require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.get("/",(req,res)=>{
res.send("<h1>First Application</h1>")
});
app.listen(8080);