var express = require("express");

var router = express.Router();
var scrape = require("../scripts/Scrape");
var db = require("../models/index.js");

app.post("/headlines/:id", function(req, res) {
    db.Note.create(req.body)
      .then(function(dbNote) {

        return db.Headline.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
      })
      .then(function(dbHeadline) {

        res.json(dbHeadline);
      })
      .catch(function(err) {

        res.json(err);
      });
  });

module.exports = router;