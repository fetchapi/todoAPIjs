var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  status: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
