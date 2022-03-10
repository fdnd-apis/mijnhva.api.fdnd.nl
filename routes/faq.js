const express = require('express')
const epxress = require('express')
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