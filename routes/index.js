const express = require('express')

module.exports = express
  .Router()

  .get('/', (req, res)=>{
    res.json({
      message: 'Welcome to mijnhva.api.fdnd.nl! Please use the resources below to expore this API.',
      github: 'https://github.com/fdnd-apis/mijnhva',
      spec: 'https://mijnhva.api.fdnd.nl/v1',
      docs: 'Not ready yet', // https://redocly.github.io/redoc/?url=https:%2F%2Ftribe.api.fdnd.nl%2Fv1
    })
  })

  .get('/v1', (req, res)=>{
    res.json({openapi: 'Open API docs here soon.'})
  })