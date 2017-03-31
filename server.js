// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request");
var History = require("./models/History.js");
var Article = require("./models/Article.js");
var request = require('ajax-request');


var app = express();
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

    // We will find all the records, sort it in descending order, then limit the records to 5
    History.find({}).sort([
        ["date", "descending"]
    ]).limit(5).exec(function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    });
});

// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {
    console.log("BODY: " + req.body.location);

    // Here we'll save the location based on the JSON input.
    // We'll use Date.now() to always get the current date time
    History.create({
        location: req.body.location,
        date: Date.now()
    }, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.send("Saved Search");
        }
    });
});

// app.get("/search", function(req, res) {
//     var authKey = "53567ecab3d5401b9ef7333adaad3204";
//     var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
//         authKey + "&q=";
//     var startYear = 0;
//     var endYear = 0;
//     searchTerm = "madonna";

//     // $("#search-term").val().trim();
//     var queryURL = queryURLBase + searchTerm;
//     request({
//         url: queryURL,
//         method: 'GET',
//         json: true
//     }, function(err, res, body) {

//         for (var i = 0; i < 5; i++) {
//             var titleResult = body.response.docs[i].headline.main;
//             var urlResult = body.response.docs[i].web_url;
//             console.log(titleResult);
//             console.log(urlResult);
//             var exampleLibrary = new Article({

//                 title: titleResult,
//                 url: urlResult,
//             });
//             exampleLibrary.save(function(error, doc) {
//                 // Log any errors
//                 if (error) {
//                     console.log(error);
//                 }
//                 // Or log the doc
//                 else {
//                     console.log(doc);
//                 }
//             });


//         };


//     });
// });




// -------------------------------------------------

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
