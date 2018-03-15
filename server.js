var bodyParser = require("body-parser");
var express = require("express");
var logger = require("morgan");
var mongoose = require('mongoose');
var request = require('request');

var axios = require("axios");
var cheerio = require('cheerio');

var db = require("./models");

var PORT = 3000;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/articlescraper";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    // useMongoClient: true
});

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});
// var db = mongoose.connection;

// db.on('error', function(err) {
//     console.log("mongoose Error: ", err);
// });

// db.once('open', function() {
//     console.log("Mongoose connection successful");
// });
