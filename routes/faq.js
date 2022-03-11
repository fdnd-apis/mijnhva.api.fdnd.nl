const express = require("express");
const Faq = require("../models/faq.model");

module.exports = express
  .Router()

  .get("/", async (req, res, next) => {
    try {
      res.json(await Faq.getAll());
    } catch (err) {
      next(err);
    }
  })

  .post("/", async (req, res, next) => {
    try {
      const faq = req.body;
      res.json(await Faq.create(faq));
    } catch (err) {
      next(err);
    }
  })

  .delete("/", async (req, res, next) => {
    try {
      const faqId = req.body.faq_id;
      res.json(await Faq.delete(faqId));
    } catch (err) {
      nextends(err);
    }
  })

  .patch("/", async (req, res, next) => {
    try {
      const faq = req.body;
      req.json(await Faq.update(faq));
    } catch (err) {
        next(err)
    }
  });
