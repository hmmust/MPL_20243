exports.postCustomer= (req,res)=>{
    res.send("<h1>Customer Application (POST method)</h1>")
};
exports.getCustomer = (req,res)=>{
    const customer_id= req.params.customerId;
    console.log(customer_id)
    //res.send("<h1>Customer Application (GET method)</h1>")
    res.render('view-customer.ejs');
    };

