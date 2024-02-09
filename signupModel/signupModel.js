const mongoose = require("mongoose")

const signupSchema = mongoose.Schema(
    {
        name:String,
        age:String,
        address:String,
        pincode:String,
        email:String,
        password:String
    }
)

module.exports = mongoose.model("signup", signupSchema)