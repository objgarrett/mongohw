var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models/index.js");

var Scrape = axios.get("https://www.nytimes.com/")
    .then(function(response) {
        var $ = cheerio.load(response.data);

        $("article h1").each(function(i, element) {
            var result = {};

            result.title = $(this)
                .children("a")
                .text();
            result.link = $(this)
                .children("a")
                .attr("href");
    });
});

module.exports = Scrape;