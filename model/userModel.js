const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    }
},
{
timestamp: {
    type: Date, 
    default: Date.now}
}
)
const Message = mongoose.model('Message', messageSchema);
module.exports = Message