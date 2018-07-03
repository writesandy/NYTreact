const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", articleSchema);

module.exports = Article;
