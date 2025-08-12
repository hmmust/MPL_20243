const customers =[];

exports.postAdd= (req,res)=>{
    customers.push({id:req.body.id, name:req.body.name})

    res.render("view-customers",{customers:customers})
    //res.render("view-customer",{id:req.body.id, name:req.body.name})
    //res.send("<h1>Customer Application (POST method)</h1>"+req.body.id+req.body.name)
};

exports.getAdd = (req,res)=>{
    res.render("add-customer");
};

