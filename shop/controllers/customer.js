//const customers =[];
const customer = require('../models/customer');
exports.postAdd= (req,res)=>{
    const new_customer = new customer({
        name:req.body.name,
        age:req.body.age,
        adderss:req.body.address
    });
    new_customer.save();
    //customers.push({id:req.body.id, name:req.body.name})

    //res.render("view-customers",{customers:customers})

};

exports.getAdd = (req,res)=>{
    res.render("add-customer");
};

