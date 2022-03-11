const express = require('express')
const Faq = require('../models/faq.model')

module.exports = express
    .Router()

    .get('/', async (req, res, next) => {
        try {
            res.json(await Faq.getAll())
        } catch (err) {
            next(err)
        }
    })

    .post('/', async (req, res, next) => {
        try {
            const faq = req.body
            res.json(await Faq.create(faq))
        } catch (err) {
            next(err)
        }
    })