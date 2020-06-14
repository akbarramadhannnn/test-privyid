const bcryptjs      = require('bcryptjs');
const jsonwebtoken  = require('jsonwebtoken');

const {
    addDaftarUser,
    getUserByUsername
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

exports.loginUser = async (req,res) => {
    const { username, password } = req.body

    try {
        const dataUser = await getUserByUsername(username)
        if(dataUser) {
            const passwordUser = await bcryptjs.compare(password, dataUser.password )
            if(passwordUser) {
                const data = {
                    id: dataUser._id
                }
                const token = await jsonwebtoken.sign(data, 'JWTSECRET')
                return res.status(200).json({
                    message: 'berhasil login',
                    token: token
                })
            } else {
                return res.status(404).json({
                    status: false,
                    message: 'password salah',
                })
            }
        } else {
            return res.status(404).json({
                status: false,
                message: 'username tidak tersedia',
            })
        }
    } catch (e) {
        return e
    }
}

exports.logoutUser = async (req,res) => {
    res.status(200).json({ 
        status: true,
        message: 'berhasil logout', 
        token: null 
    });
}