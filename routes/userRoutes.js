const express   = require('express');
const router    = express.Router();
const { 
    daftarUser,
    loginUser,
    logoutUser
} = require('../controllers/userControllers')

router.post('/daftar', daftarUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router