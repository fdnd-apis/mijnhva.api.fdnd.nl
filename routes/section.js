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

  .delete('/', async (req, res, next)=>{
    try {
      const sectionId = req.body.section_id
      res.json(await Section.delete(sectionId))
    } catch (err) {
      next(err)
    }
  })

  .patch('/', async (req, res, next)=>{
    try {
      const section = req.body
      res.json(await Section.update(section))
    } catch (err) {
      next(err)
    }
  })