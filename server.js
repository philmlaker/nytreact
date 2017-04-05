var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(express.static("public"));
var logger = require("morgan");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request");

var PORT = process.env.PORT || 3078;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/nytreactcopy");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});








app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
