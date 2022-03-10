require('dotenv').config()
const express = require('express')

const indexRoute = require('./routes/index')
const errorRoute = require('./routes/error')

module.exports = express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))

  .use('/', indexRoute)
  // We will define routes here 🧭
  .use(errorRoute)