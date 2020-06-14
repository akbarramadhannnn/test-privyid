const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const BlanceBankHistorySchema = new mongoose.Schema({
    BlanceBankId: {
        type: ObjectId,
        ref: 'UserBalance',
    },
    blanceBefore: {
        type: Number,
    },
    blanceAfter: {
        type: Number,
    },
    activity: {
        type: String
    },
    type: {
        type: String,
        enum: ['credit', 'debit']
    },
    ip: {
        type: String
    },
    location: {
        type: String
    },
    user_agent: {
        type: String
    },
    author: {
        type: String
    }
})

module.exports = mongoose.model("BlanceBankHistory", BlanceBankHistorySchema)

