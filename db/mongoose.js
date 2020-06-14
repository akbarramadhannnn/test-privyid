const mongoose      = require('mongoose');
require('dotenv');

const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/tes-privyid', { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useFindAndModify: false, 
            useCreateIndex: true 
        })
        console.log(`Database terhubung.. nama mongodb uri`)
    } catch (e) {
        console.log(e.message)
        process.exit(1)
    }
}

module.exports = connectMongoDB