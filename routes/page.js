const express = require('express')
const Page = require('./../models/page.model')

module.exports = express
  .Router()

  .get('/:slug', async (req, res, next)=>{
    try {
      const slug = req.params.slug
      res.json(await Page.findBySlug(slug))
      res.send('Hallo wereld')
    } catch (err) {
      next(err)
    }
  })