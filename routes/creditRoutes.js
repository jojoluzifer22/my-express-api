const express = require('express');
const router = express.Router();


const { getCredit, topupCredit} = require('../controllers/creditController');


router.get('/' , authMiddleware , getCredit);

router.post('topup' , authMiddleware, topupCredit);


module.exports = router;