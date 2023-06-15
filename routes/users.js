const express = require('express')
const router = express.Router()

// /api/user/login
router.post('/login', function (req, res) {
  res.send('login')
})

// /api/user/register
router.post('/register', function (req, res) {
  res.send('register')
})

// /api/user/current
router.post('/current', function (req, res) {
  res.send('current')
})

module.exports = router
