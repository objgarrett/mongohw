var express = require("express");

var router = express.Router();
var scrape = require("../scripts/Scrape");
var db = require("../models/index.js");

app.get("/headlines", function(req, res) {
    db.Article.find({})
      .then(function(dbHeadline) {
        res.json(dbHeadline);
      })
      .catch(function(err) {

        res.json(err);
      });
  });
  
app.get("/headlines/:id", function(req, res) {

    db.Headline.findOne({ _id: req.params.id })
      
      .populate("note")
      .then(function(dbHeadline) {

        res.json(dbHeadline);
      })
      .catch(function(err) {

        res.json(err);
      });
});

module.exports = router;