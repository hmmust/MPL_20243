const express = require('express');
const router = express.Router();
const customerController = require("../controllers/customer");
const checkLoggedIn = (req,res,next)=>{
    if(req.session.userLoggedIn)
        next();
    else
        req.redirect("login");
}

router.post("/add",customerController.postAdd);
router.get("/add",customerController.getAdd);
router.get("/list",checkLoggedIn,customerController.getCustomers);
router.get("/delete/:customer_id",customerController.getDeleteCustomer);
router.post("/update",customerController.postEditCustomer);
router.post("/save",customerController.postSaveCustomer);


module.exports = router;