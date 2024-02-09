const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"signup"},
    post:{type:String,
    required:true},
    postdate:{type:Date,
    default:Date.now}
})

module.exports = mongoose.model("post",postSchema)