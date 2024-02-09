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

router.post("/signin", async (req, res) => {
    let input = req.body
    let email = req.body.email
    let data = await signupModel.findOne({ "email": email })
    if (!data) {
        return res.json({
            status: "invalid user"
        })
    }
    console.log(data)
    let dbpassword = data.password
    let inputpassword = req.body.password
    console.log(dbpassword)
    console.log(inputpassword)
    const match = await bcrypt.compare(inputpassword, dbpassword)
    if (!match) {
        return res.json({
            status: "incorrect password"
        })
    }
    res.json({
        status: "success"
    })
})


module.exports = router