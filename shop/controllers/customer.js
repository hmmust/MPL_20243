//const customers =[];
const customer = require("../models/customer");

exports.postAdd= (req,res)=>{
    // n = req.body.name;
    // a = req.body.age;
    // add = req.body.address;
    const new_cust= new customer({
        name:req.body.name,
        age:req.body.age,
        address:req.body.address
    });
    new_cust.save();
    //res.send("customer saved!");
    res.redirect("/cust/list")

};

exports.getAdd = (req,res)=>{
    res.render("add-customer");
};

exports.getCustomers = (req,res)=>{
    customer.find().then((custs)=>{
        res.render("view-customers",{customers:custs})
    });
};

exports.getDeleteCustomer = (req,res)=>{
    const customer_id= req.params.customer_id;
    customer.findByIdAndDelete(customer_id).then((cust)=>{
        res.redirect("/cust/list")
    });

};

exports.postEditCustomer = (req,res)=>{
    const customer_id= req.body.id;
    customer.findById(customer_id).then((cust)=>{
        res.render("edit-customer",{customer:cust});
    });

};



exports.postSaveCustomer = (req,res)=>{
    const customer_id= req.body.id;
    const name= req.body.name;
    const age= req.body.age;
    const address = req.body.address;

    customer.findById(customer_id).then((cust)=>{
         cust.name= name;
         cust.age= age;
         cust.address = address;
         cust.save().then((r)=>{
            res.redirect("/cust/list");
         });
     });

};



