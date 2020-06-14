const express   = require('express');
const router    = express.Router();
const { 
    daftarUser,
    loginUser
} = require('../controllers/userControllers')

router.post('/daftar', daftarUser);
router.post('/login', loginUser);

module.exports = router