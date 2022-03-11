const express = require('express')
const Tip = require('../models/tip.model')

module.exports = express
    .Router()

    .get('/', async (req, res, next) => {
        try {
            res.json(await Tip.getAll())
        } catch (err) {
            next(err)
        }
    })

    .post('/', async (req, res, next) => {
        try {
            const tip = req.body
            res.json(await Tip.create(tip))
        } catch (err) {
            next(err)
        }
    })