const mongoose = require("mongoose");
const customerSchema = mongoose.Schema({
    name:String,
    age:Number,
    address:String,
});
module.exports= mongoose.model("customer",customerSchema);