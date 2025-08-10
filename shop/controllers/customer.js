exports.postAdd= (req,res)=>{
    res.send("<h1>Customer Application (POST method)</h1>"+req.body.id+req.body.name)
};
exports.getAdd = (req,res)=>{
    res.render("add-customer");
};

