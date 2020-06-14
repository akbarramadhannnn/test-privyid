const bcryptjs = require('bcryptjs');

const {
    addDaftarUser
} = require('../models/userModels');

exports.daftarUser = async (req,res) => {
    const { username, email, password } = req.body

    try {
        const hashPassword = await bcryptjs.hash(password, 10)
        const data = {
            username : username,
            email: email,
            password: hashPassword,
        }
        const result = await addDaftarUser(data)
        return res.status(201).send(result)
    } catch (e) {
        return e
    }
}