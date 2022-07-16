const express = require('express')
const { users } = require('./users')

const router = express.Router()

function setRouter(app) {
  app.use('/api', router)
  router.use('/users', users)
}

module.exports = {setRouter}
