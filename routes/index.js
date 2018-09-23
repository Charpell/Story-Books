const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('It works')
})

router.get('/dashboard', (req, res) => {
  res.render('index/dashboard');
});

module.exports = router;