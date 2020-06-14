const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const UserBalanceHistorySchema = new mongoose.Schema({
    userBalanceId: {
        type: ObjectId,
        ref: 'UserBalance',
    },
    balanceBefore: {
        type: Number,
    },
    balanceAfter: {
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

module.exports = mongoose.model("UserBalanceHistory", UserBalanceHistorySchema)

