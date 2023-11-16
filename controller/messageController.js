const messageModel = require("../model/messageModel")

module.exports = {
    gets: async(req, res) => {
        try {
            const messages = await userModel.find().populate("user", "username")
            res.status(200).json({
                message: "All Message",
                data: messages
            })
          } catch(error) {
            res.status(500).json({ 
                message: error.message 
            })
          }
    }
}