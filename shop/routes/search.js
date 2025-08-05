const express = require('express');
const router = express.Router();
const searchController = require("../controllers/search");
router.post("/search",searchController.postSearch);
router.get("/search",searchController.getSearch);
router.get("/",searchController.getHome);    

module.exports = router;