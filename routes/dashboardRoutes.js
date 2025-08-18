const express = require('express');
const router = express.Router();

router.get('/stats', (req, res) => {
  const salesOverTime = [
    { name: 'Jan', Sales: Math.floor(Math.random() * 5000) + 1000 },
    { name: 'Feb', Sales: Math.floor(Math.random() * 5000) + 1000 },
    { name: 'Mar', Sales: Math.floor(Math.random() * 5000) + 1000 },
    { name: 'Apr', Sales: Math.floor(Math.random() * 5000) + 1000 },
    { name: 'May', Sales: Math.floor(Math.random() * 5000) + 1000 },
    { name: 'Jun', Sales: Math.floor(Math.random() * 5000) + 1000 },
  ];

  const userSources = [
    { name: 'Google', value: 456 },
    { name: 'Facebook', value: 321 },
    { name: 'Direct', value: 198 },
    { name: 'Referral', value: 89 },
  ];

  res.status(200).json({ salesOverTime, userSources });
});

module.exports = router;
