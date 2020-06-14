const express   = require('express');
const router    = express.Router();
const { 
    daftarUser
} = require('../controllers/userControllers')

router.post('/daftar', daftarUser);

module.exports = router