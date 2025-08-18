const express = require("express");
const {updateProfile, getMe} = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.put('/', updateProfile );
router.get('/me' , authMiddleware , getMe);


module.exports = router;