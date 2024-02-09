const express = require("express")
const signupModel = require("../signupModel/signupModel")

const router = express.Router()

router.post("/add",async(req,res)=>{
    let data = req.body
    let signup = new signupModel(data)
    let result = await signup.save()
    res.json({status:"success"})
})

module.exports = router