const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  description: { type: String, default: '-' },
  status: { type: String, default: 'Pending' },
  end_date: { type: Date, default: Date.now() + 1 },
});

module.exports = mongoose.model('Todo', TodoSchema);