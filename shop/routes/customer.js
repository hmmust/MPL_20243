const express = require('express');
const router = express.Router();
const customerController = require("../controllers/customer");
router.post("/add",customerController.postAdd);
router.get("/add",customerController.getAdd);
//router.get("/view/:customerId",customerController.getCustomers);

module.exports = router;