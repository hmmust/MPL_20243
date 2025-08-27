const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username:{type:String,required:true},
    password:String,
});
module.exports= mongoose.model("user",userSchema);