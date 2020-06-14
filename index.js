require('dotenv').config();
const express           = require('express');
const app               = express();
const connetMongoDB     = require('./db/mongoose');
const bodyParser        = require('body-parser');
const userRoutes        = require('./routes/userRoutes');

connetMongoDB()

app.use(bodyParser.json())
app.use('/', userRoutes)
app.listen(process.env.PORT, (req,res) => {
    console.log(`server run on port ${process.env.PORT}`)
})