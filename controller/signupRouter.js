const express = require("express")
const signupModel = require("../signupModel/signupModel")
const bcrypt = require("bcryptjs")

const router = express.Router()

hashPassGen = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

router.post("/signup", async (req, res) => {
    let { data } = { "data": req.body }
    let password = data.password
    hashPassGen(password).then(
        (hashPass) => {
            
            data.password = hashPass
            let signup = new signupModel(data)
            let result = signup.save()
            res.json({ status: "success" })
            console.log(data)

        }
    )
})



module.exports = router