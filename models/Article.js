// DEPENDENCIES
var mongoose = require("mongoose");

// SCHEMA CLASS
var Schema = mongoose.Schema;

// ARTICLE SCHEMA
var ArticleSchema = new Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
  }
});

// ARTICLE MODEL
var Article = mongoose.model("Article", ArticleSchema);

// MAKE AVAILABLE EXTERNALLY
module.exports = Article;