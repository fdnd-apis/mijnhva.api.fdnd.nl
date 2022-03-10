require('dotenv').config()
const express = require('express')

const indexRoute = require('./routes/index')
const pageRoute = require('./routes/page')
const sectionRoute = require('./routes/section')
const errorRoute = require('./routes/error')

module.exports = express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))

  .use('/', indexRoute)
  // We will define routes here 🧭
  .use('/v1/page', pageRoute)
  .use('/v1/section', sectionRoute)
  .use(errorRoute)