const express = require("express")
const signupModel = require("../signupModel/signupModel")
const bcrypt = require("bcryptjs")

const router = express.Router()

hashPassGen = async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/add",async(req,res)=>{
    let {data} = {"data":req.body}
    let password = data.password
    hashPassGen(password).then(
        (hashPass)=>{
            console.log(hashPass)
        }
    )

    console.log(data)

    // let signup = new signupModel(data)
    // let result = await signup.save()
    res.json({status:"success"})
})

module.exports = router