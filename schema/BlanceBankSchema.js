const mongoose = require('mongoose')

const BlanceBankSchema = new mongoose.Schema({
    balance: {
        type: Number,
    },
    balanceAchieve: {
        type: Number,
    },
    code: {
        type: String
    },
    enable: {
        type: Boolean
    }
})

module.exports = mongoose.model("BlanceBank", BlanceBankSchema)

