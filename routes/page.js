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

  .get("/:id", async (req, res, next)=>{
    try {
      const id = req.params.id
      res.json(await Page.getById(id))
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

  .delete('/', async (req, res, next)=>{
    try {
      const pageId = req.body.page_id
      res.json(await Page.delete(pageId))
    } catch (err) {
      next(err)
    }
  })

  .patch('/', async (req, res, next)=>{
    try {
      const page = req.body
      res.json(await Page.update(page))
    } catch (err) {
      next(err)
    }
  })