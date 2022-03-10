const express = require('express')
const Section = require('../models/section.model')

module.exports = express
  .Router()

  .get('/', async (req, res,next)=>{
    try {
      res.json(await Section.getAll())
    } catch (err) {
      next(err)
    }
  })

  .post('/', async (req, res, next)=>{
    try {
      const section = req.body
      res.json(await Section.create(section))
    } catch (err) {
      next(err)
    }
  })