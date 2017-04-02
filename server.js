var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(express.static("public"));


var PORT = process.env.PORT || 3078;




app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});








app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
