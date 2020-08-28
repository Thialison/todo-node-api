const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  description: String,
  status: Boolean,
  end_date: { type: Date, default: Date.now() + 1 },
});

module.exports = mongoose.model('Todo', TodoSchema);