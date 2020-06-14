const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const UserBalanceSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User',
    },
    balance: {
        type: Number,
    },
    balanceAchieve: {
        type: Number,
    },
})

module.exports = mongoose.model("UserBalance", UserBalanceSchema)

