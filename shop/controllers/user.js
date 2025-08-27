const user = require("../models/user");
exports.getLogin = (req,res)=>{
    
    res.render("login");
};

exports.postLogin = (req,res)=>{
    un=req.body.username;
    ps = req.body.password;
    // check on database
    user.find({username:un,password:ps }).then((fuser)=>{
        if(fuser.length != 0)
        {   req.session.userLoggedIn= true;
            res.redirect("cust/list");
        }
        else{
            req.session.userLoggedIn = false;
            res.redirect("login");
        }
    });
};

exports.getLogout = (req,res)=>{
};