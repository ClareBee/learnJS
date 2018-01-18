var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  topic: String,
  question: String,
  answer: String,
});

module.exports = mongoose.model('Question', QuestionSchema);
