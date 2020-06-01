const mongoose = require('mongoose');

//create schema: the way your data looks
const CommentSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Comments", CommentSchema);