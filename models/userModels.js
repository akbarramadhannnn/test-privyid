const User = require('../schema/UserSchema');

exports.addDaftarUser = async (data) => {
    const user = new User({
        username: data.username,
        email: data.email,
        password: data.password,
    })
    await user.save()
    return {
        status: true,
        message: 'User berhasil ditambahkan'
    }
}

exports.getUserByUsername = async (username) => {
    const result = await User.findOne({username: username})
    return result
}