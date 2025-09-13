const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');

const { getCredit, topupCredit} = require('../controllers/creditController');


router.get('/' , authMiddleware , getCredit);

router.post('/topup' , authMiddleware, topupCredit);


module.exports = router;