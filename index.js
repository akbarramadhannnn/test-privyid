require('dotenv');
const express           = require('express');
const app               = express();
const connetMongoDB     = require('./db/mongoose');
const bodyParser        = require('body-parser');

connetMongoDB()

app.use(bodyParser.json())
app.listen(process.env.PORT, (req,res) => {
    console.log(`server run on port ${process.env.PORT}`)
})