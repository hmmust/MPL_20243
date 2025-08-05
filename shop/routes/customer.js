const express = require('express');
const router = express.Router();
const customerController = require("../controllers/customer");
router.post("/add",customerController.postCustomer);
router.get("/view/:customerId",customerController.getCustomer);

module.exports = router;