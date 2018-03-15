var express = require("express");

var router = express.Router();
var scrape = require("../scripts/Scrape");
var db = require("../models/index.js");

router.get("/scrape", function (req, res) {
    db.Headline.create(result)
        .then(function(dbHeadline) {
            console.log(dbHeadline);
        })
        .catch(function(err) {
            return res.json(err);
        });   
    res.send("Scrape Complete");     
});

module.exports = router;