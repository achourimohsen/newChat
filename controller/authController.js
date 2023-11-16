const userModel = require("../model/userModel")
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
    // register user
    signUp: async(req, res) => {
        try{
            const salt = bcrypt.genSaltSync(50)
            const hash = await bcrypt(req.body.password, salt)
            const newUser = await new userModel({...req.body, password: hash})

            await newUser.save()
            res.status(200).json({
                success: true, 
                message: "successduly created",
                data: newUser
            })
        } catch(error) {
            res.status(500).json({
                message: "failed, Try again"
            })
        }
    },

    // login user
    signIn: async(req, res) => {
        const {email, password} =req.body
        const userModel = await userModel.findOne({email})

        // if does'nt exist
        if(!userModel) {
            return res.status(400).json({
                message: "Email invalid"
            })
        }
        // if user exist then check the pss or compare th pss
        bcrypt.compare(password, user.password).then(
            (isMatch) => {
                // if pss is incrrct
                if (isMatch === false) {
                    return res.status(402).json({
                        message: "pssword is wrong"
                    })
                }
                // create jwt
                else {
                    const token = jwt.sign(
                        {data: {
                            id: userModel,
                            isRead: userModel.isRead
                        }},
                        {expireIn: "2d"}
                    )
                    return res.status(200).json({
                        message: "Enter! is success",
                        token: token,
                        userModeluserM
                    })
                }
            }
        )
    },
}