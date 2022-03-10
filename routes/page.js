const express = require('express')
const Page = require('./../models/page.model')

module.exports = express
  .Router()

  .get('/', async (req, res, next)=>{
    try {
      res.json(await Page.getAll())
    } catch (err) {
      next(err)
    }
  })

  .get('/:slug', async (req, res, next)=>{
    try {
      const slug = req.params.slug
      res.json(await Page.findBySlug(slug))
    } catch (err) {
      next(err)
    }
  })

  .post('/', async (req, res, next)=>{
    try {
      const page = req.body
      res.json(await Page.create(page))
    } catch (err) {
      next(err)
    }
  })