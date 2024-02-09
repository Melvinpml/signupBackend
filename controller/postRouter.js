const express = require("express")
const postModel = require("../signupModel/postModel")
const router = express()

router.post("/add",async(req,res)=>{
    let data = req.body
    let postAdd = new postModel(data)
    let result = await postAdd.save()
    res.json({status:"success"})
})

module.exports = router